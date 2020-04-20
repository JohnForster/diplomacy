import to from 'await-to-js'
import Axios from 'axios'
import {Component, h, Fragment} from 'preact'

import Board from '@client/app/components/board/board';
import boardData from '@client/assets/countryData'
import setupNewFullGame from '@client/devTools/setupGame'
import validateMove from '@shared/helpers/validateMove';
import { IGameJSON , IGameTurnJSON, IMove, IUnit, OrderType} from '@shared/types'

import './game.scss'

export interface IGameProps {
  userID: string,
  logOut: () => void,
}

interface IGameState {
  game?: IGameJSON
  turn?: IGameTurnJSON
  newOrders: IMove[]
  newOrder: Partial<IMove>
  gameIsRunning: boolean
  activeTerritory: string
}

export default class Game extends Component <IGameProps, IGameState> {
  state: IGameState = {
    gameIsRunning: false,
    activeTerritory: null,
    turn: null,
    newOrders: [],
    newOrder: null,
  }

  render(props: IGameProps, state: IGameState) {
    console.log('process.env.NODE_ENV:', process.env.NODE_ENV)
    let totalOrders = 0
    if (state.turn) state.turn.players.forEach(p => totalOrders += p.moves.length)
    return (
      <div className='page'>
        <h1>{process.env.NODE_ENV !== 'production' ? 'Stop being a perfectionist!' : 'Diplomacy'}</h1>
        <div className='buttonsContainer' >
          <button onClick={this.setupGame}>Set Up Game</button>
          <button onClick={this.getLatestGame}>Load Game</button>
          <button onClick={this.submitOrders}>Submit Orders</button>
          <button onClick={this.props.logOut}>Log out</button>
          <button onClick={this.nextTurn}>Next Turn</button><br/>
        </div><br/>
        {!!state.turn && (
          <Fragment>
            <p>{`You are playing as ${state.turn.players.find(p => p.playerID === props.userID).empire}`}</p>
            <p>{`${state.turn.info.season} ${state.turn.info.year}: ${state.turn.info.phase}. Current Orders: ${totalOrders}`}</p>
          </Fragment>
        )}
        {/* Can extend in future to have a "showText" boolean for board previews? */}
        <Board
          boardData={boardData}
          activeTerritory={state.activeTerritory}
          onTileSelect={this.onTileSelect}
          onMoveSelect={this.onMoveSelect}
          turnData={state.turn}
          newOrders={state.newOrders}
        />
      </div>
    )
  }

  onTileSelect = (territoryName: string) => {
    return () => {
      if (this.state.newOrder && this.state.newOrder.moveType) {
        const order = {...this.state.newOrder}
        if (order.moveType === 'support') {
          if (order.supportFrom) return this.completeMove(territoryName)
          order.supportFrom = territoryName
          this.setState({newOrder: order})
        }
        if (order.moveType === 'move') this.completeMove(territoryName)
      }
      if (!this.state.newOrder && this.playerHasUnitAt(territoryName)) this.beginMove(territoryName)
    }
  }

  onMoveSelect = (orderType: OrderType) => () => {
    if (orderType === null) return this.setState({newOrder: null, activeTerritory: null})
    const newOrder = {...this.state.newOrder}
    newOrder.moveType = orderType

    this.setState({newOrder}, () => {
      if (orderType === 'hold') this.completeMove(newOrder.from)
    })
  }

  private beginMove(territoryName: string) {
    const unit = this.getUnitAt(territoryName)
    const newOrder: Partial<IMove> = {
      unit: unit.unitType,
      from: unit.location,
    }
    this.setState({ newOrder, activeTerritory: territoryName })
  }

  private completeMove(territoryName: string) {
    const newOrder: IMove = {
      unit: this.state.newOrder.unit,
      from: this.state.newOrder.from,
      moveType: this.state.newOrder.moveType,
      supportFrom: this.state.newOrder.supportFrom,
      to: territoryName,
      wasSuccessful: null,
    }
    const newOrders = this.state.newOrders.filter(o => o.from !== newOrder.from)
    newOrders.push(newOrder)
    console.log('newOrder:', newOrder)
    this.setState({ newOrders, newOrder: null, activeTerritory: null })
  }

  get player() {
    if (!this.state.turn) return null
    return this.state.turn.players.find(p => p.playerID === this.props.userID)
  }

  private playerHasUnitAt = (territoryName: string): boolean => {
    if (!this.state.turn) return false
    const player = this.state.turn.players.find(p => p.playerID === this.props.userID)
    return !!player.ownedUnits.find(u => u.location === territoryName)
  }

  private getUnitAt = (territoryName: string): IUnit => {
    let unit
    this.state.turn.players.forEach(p => {
      p.ownedUnits.forEach(u => {
        if (u.location === territoryName) unit = u
      })
    })
    return unit
  }

  // ? Move axios requests into a helper service?
  private setupGame = async () => {
    const [err, {data: game}] = await to(setupNewFullGame())

    if (err) {
      console.log(`Error ocurred when setting up new full game: ${err.message}`)
      return Promise.reject(err)}
    const {data: turn} = await Axios.get(`api/turn/${game.currentTurn}`)
    this.setState({game, turn})
  }

  private getLatestGame = async () => {
    const {data: game} = await Axios.get('/api/game/latest')
    const {data: turn} = await Axios.get(`/api/turn/${game.currentTurn}`)
    this.setState({game, turn})
  }

  // private refresh = () => {
  //   game.clearMap()
  //   this.runGame()
  // }

  private submitOrders = async () => {
    await Axios.patch(`/api/turn/${this.state.game.currentTurn}`, {
      moves: this.state.newOrders,
      turnID: this.state.game.currentTurn,
    })
    console.log('Orders submitted!', this.state.newOrders)
  }

  private nextTurn = async () => {
    const [err, res] = await to(Axios.post(`/api/game/${this.state.game._id}/next`))
    if (err) console.log(err)
    if (res) this.getLatestGame()
  }

  // private getSvg = (label: string) => {
  //   const svgObject = document.getElementById(label) as HTMLObjectElement
  //   return svgObject.contentDocument.getElementById(`${label}Svg`)
  // }

  // private runGame() {
  //   const [army, fleet] = ['army', 'fleet'].map(this.getSvg)
  //   const map = document.getElementById('gameBoard') as HTMLObjectElement
  //   game.setup({map, army, fleet}, this.state.turn, this.props.userID)
  //   game.run()
  // }
}
