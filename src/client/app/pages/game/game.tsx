import to from 'await-to-js'
import Axios from 'axios'
import {Component, h} from 'preact'

import Board from '@client/app/components/board/board';
import boardData from '@client/assets/countryData'
import setupNewFullGame from '@client/devTools/setupGame'
import { IGameJSON , IGameTurnJSON, IOrder } from '@shared/types'

import './game.scss'
import ProvinceId from '@shared/types/enums/ProvinceId';
import OrderType from '@shared/types/enums/OrderType';
import Nation from '@shared/types/enums/Nation';

export interface IGameProps {
  userID: string,
  logOut: () => void,
}

interface IGameState {
  game?: IGameJSON
  turn?: IGameTurnJSON
  newOrders: IOrder[]
  newOrder: Partial<IOrder>
  gameIsRunning: boolean
  activeTerritory: ProvinceId
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
    console.log('game.tsx state.turn:', state.turn)
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
          <h2>You are playing as {Object.entries(state.turn.info.players).find(([empire, id]) => id === props.userID)[0]}</h2>
        )}
        {/* Can extend in future to have a "showText" boolean for board previews? */}
        <Board
          boardData={boardData}
          players={state.game?.players}
          activeTerritory={state.activeTerritory}
          onTileSelect={this.onTileSelect}
          onMoveSelect={this.onMoveSelect}
          turnData={state.turn}
          newOrders={state.newOrders}
        />
      </div>
    )
  }

  onTileSelect = (territoryName: ProvinceId) => {
    return () => {
      if (this.state.newOrder && this.state.newOrder.moveType) {
        const order = {...this.state.newOrder}
        if (order.moveType === 'Support') {
          if (order.supportFrom) return this.completeMove(territoryName)
          order.supportFrom = territoryName
          this.setState({newOrder: order})
        }
        if (order.moveType === 'Move') this.completeMove(territoryName)
      }
      if (!this.state.newOrder && this.playerHasUnitAt(territoryName)) this.beginMove(territoryName)
    }
  }

  onMoveSelect = (orderType: OrderType) => () => {
    if (orderType === null) return this.setState({newOrder: null, activeTerritory: null})
    const newOrder = {...this.state.newOrder}
    newOrder.moveType = orderType

    this.setState({newOrder}, () => {
      if (orderType === 'Hold') this.completeMove(newOrder.from)
    })
  }

  private beginMove(territoryId: ProvinceId) {
    const unit = this.state.turn.state.Units[territoryId]
    const newOrder: Partial<IOrder> = {
      empire: unit.Nation,
      unit: unit.Type,
      from: territoryId,
    }
    this.setState({ newOrder, activeTerritory: territoryId })
  }

  private completeMove(territoryId: ProvinceId) {
    const newOrder: IOrder = {
      empire: this.state.turn?.state.Units[territoryId]?.Nation,
      unit: this.state.newOrder.unit,
      from: this.state.newOrder.from,
      moveType: this.state.newOrder.moveType,
      supportFrom: this.state.newOrder.supportFrom,
      to: territoryId,
      wasSuccessful: null,
    }
    const newOrders = this.state.newOrders.filter(o => o.from !== newOrder.from)
    newOrders.push(newOrder)
    console.log('newOrder:', newOrder)
    this.setState({ newOrders, newOrder: null, activeTerritory: null })
  }

  get player(): {id: string, empire: Nation} {
    if (!this.state.turn) return null
    const empire = Object.entries(this.state.turn?.info.players).find(([e, id]) => id = this.props.userID)?.[0]
    return {
      id: this.props.userID,
      empire: empire as Nation,
    }
  }

  private playerHasUnitAt = (territoryId: ProvinceId): boolean => {
    if (!this.state.turn) return false
    return this.state.turn?.state.Units[territoryId]?.Nation === this.player.empire
  }

  // ? Move axios requests into a helper service?
  private setupGame = async () => {
    const [err, res] = await to(setupNewFullGame())
    if (err) return Promise.reject(err)
    const game = res.data
    console.log('game:', game)
    const {data: turn} = await Axios.get(`api/turn/${game.currentTurn}`)
    console.log('turn:', turn)
    this.setState({game, turn})
  }

  private getLatestGame = async () => {
    const {data: game} = await Axios.get('/api/game/latest')
    console.log('game:', game)
    const {data: turn} = await Axios.get(`/api/turn/${game.currentTurn}`)
    console.log('turn:', turn)
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
