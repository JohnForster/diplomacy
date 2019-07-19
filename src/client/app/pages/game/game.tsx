import {Component, h} from 'preact'

import { IGameJSON , IGameTurnJSON} from '@shared/types'
import to from 'await-to-js'
import Axios from 'axios'
import setupNewFullGame from '../../../devTools/setupGame'
import game from '@client/engine/game'

import './game.scss'

export interface IGameProps {
  userID: string,
  logOut: () => void,
}

interface IGameState {
  game?: IGameJSON,
  turn?: IGameTurnJSON,
  gameIsRunning: boolean
}

export default class Game extends Component <IGameProps, IGameState> {
  state: IGameState = {gameIsRunning: false}

  render(props: IGameProps, state: IGameState) {
    return (
      <div className='page'>
        <div className='buttonsContainer' >
          <button onClick={this.setupGame}>Set Up Game</button>
          <button onClick={this.getLatestGame}>Load Game</button>
          <button onClick={this.submitOrders}>Submit Orders</button>
          <button onClick={this.props.logOut}>Log out</button>
          <button onClick={this.nextTurn}>Next Turn</button><br/>
        </div><br/>
        <div className='map'>
          <object id='army' type='image/svg+xml' data='assets/svg/001-tank-1.svg' width='0'></object>
          <object id='fleet' type='image/svg+xml' data='assets/svg/002-cruiser.svg' width='0'></object>
          <object id='mainMap' type='image/svg+xml' data='assets/Diplomacy.svg' class='overlay'>Diplomacy map should be here</object>
        </div>
      </div>
    )
  }

  // ? Move axios requests into a helper service?
  private setupGame = async () => {
    const {data: game} = await setupNewFullGame()
    const {data: turn} = await Axios.get(`api/turn/${game.currentTurn}`)
    console.log('setting up game...')
    console.log(turn)
    this.setState({game, turn}, () => {
      this.runGame()
    })
  }

  private getLatestGame = async () => {
    const {data: game} = await Axios.get('/api/game/latest')
    const {data: turn} = await Axios.get(`api/turn/${game.currentTurn}`)
    this.setState({game, turn}, this.runGame)
  }

  private fetchGame = async (id: string) => {
    const {data: game} = await Axios.get(`/api/game/${id}`)
    const {data: turn} = await Axios.get(`api/turn/${game.currentTurn}`)
    this.setState({game, turn})
  }

  private submitOrders = async () => {
    await Axios.patch(`/api/turn/${this.state.game.currentTurn}`, {
      moves: game.orders.map((order) => order.toObject()),
      turnID: this.state.game.currentTurn,
    })
    console.log('sent!')
  }

  private nextTurn = async () => {
    console.log(this.state.game)
    const [err, res] = await to(Axios.post(`/api/game/${this.state.game._id}/next`))
    if (err) console.log(err)
    if (res) {
      this.getLatestGame()
    }
  }

  private runGame() {
    console.log('Running game')
    const svgObject = document.getElementById('mainMap') as HTMLObjectElement
    const map = svgObject.contentDocument.getElementById('mapSvg')

    const armyObject = document.getElementById('army') as HTMLObjectElement
    const army = armyObject.contentDocument.getElementById('armySvg')

    const fleetObject = document.getElementById('fleet') as HTMLObjectElement
    const fleet = fleetObject.contentDocument.getElementById('fleetSvg')

    console.log(fleet)

    game.setup({map, army, fleet}, this.state.turn, this.props.userID)
    game.run()
  }
}