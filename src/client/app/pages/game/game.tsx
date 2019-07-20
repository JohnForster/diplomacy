import {Component, h} from 'preact'

import { IGameJSON , IGameTurnJSON} from '@shared/types'
import to from 'await-to-js'
import Axios from 'axios'
import setupNewFullGame from '../../../devTools/setupGame'
import game from '@client/engine/game'

import './game.scss'
import Board from '@client/app/components/board/board';

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
        <div>
          <object id='army' type='image/svg+xml' data='assets/svg/001-tank-1.svg' width='0'></object>
          <object id='fleet' type='image/svg+xml' data='assets/svg/002-cruiser.svg' width='0'></object>
          {/* <object id='map' type='image/svg+xml' data='assets/Diplomacy.svg' class='overlay'>Diplomacy map should be here</object> */}
          <Board/>
        </div>
      </div>
    )
  }

  // ? Move axios requests into a helper service?
  private setupGame = async () => {
    const {data: game} = await setupNewFullGame()
    const {data: turn} = await Axios.get(`api/turn/${game.currentTurn}`)
    this.setState({game, turn}, () => {
      this.runGame()
    })
  }

  private getLatestGame = async () => {
    const {data: game} = await Axios.get('/api/game/latest')
    const {data: turn} = await Axios.get(`/api/turn/${game.currentTurn}`)
    this.setState({game, turn}, this.refresh)
  }

  private refresh = () => {
    game.clearMap()
    this.runGame()
  }

  private fetchGame = async (id: string) => {
    const {data: game} = await Axios.get(`/api/game/${id}`)
    const {data: turn} = await Axios.get(`/api/turn/${game.currentTurn}`)
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
    const [err, res] = await to(Axios.post(`/api/game/${this.state.game._id}/next`))
    if (err) console.log(err)
    if (res) this.getLatestGame()
  }

  private getSvg = (label: string) => {
    const svgObject = document.getElementById(label) as HTMLObjectElement
    console.log(svgObject, label)
    return svgObject.contentDocument.getElementById(`${label}Svg`)
  }
  private runGame() {
    const [army, fleet] = ['army', 'fleet'].map(this.getSvg)
    const map = document.getElementById('gameBoard') as HTMLObjectElement
    game.setup({map, army, fleet}, this.state.turn, this.props.userID)
    game.run()
  }
}
