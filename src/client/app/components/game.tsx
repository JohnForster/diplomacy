import {Component, h} from 'preact'

import { IGame } from '@server/models/game.model'
import { IGameTurn } from '@server/models/turn.model'
import Axios from 'axios'
import setupNewFullGame from '../../devTools/setupGame'
import game from '../../engine/game'

export interface IGameProps {

}

interface IGameState {
  game?: IGame,
  turn?: IGameTurn,
}

export default class Game extends Component <IGameProps, IGameState> {
  state: IGameState = {}
  render(props: IGameProps, state: IGameState) {
    return (
      <div>
        <button onClick={this.setupGame}>Set Up Game</button>
        <button onClick={this.getLatestGame}>Load Game</button>
        <button onClick={this.submitOrders}>Submit Orders</button><br/>
          <object id='army' type='image/svg+xml' data='assets/svg/001-tank-1.svg' width='0'></object>
          <object id='fleet' type='image/svg+xml' data='assets/svg/002-cruiser.svg' width='0'></object>
        <div className='map'>
          <img class='bg' src='./assets/paperTexture.jpg' />
          <object id='mainMap' type='image/svg+xml' data='assets/Diplomacy.svg' class='europeMap'>
            There should be a diplomacy map here...
          </object>
        </div>
        {game.orders.map((order) => <span>`${order.moveType} ${order.unit} from ${order.from} to ${order.to}`</span>)}
      </div>
    )
  }

  // ? Move axios requests into a helper service?
  private setupGame = async () => {
    const {data: game} = await setupNewFullGame()
    const {data: turn} = await Axios.get(`api/turn/${game.currentTurn}`)
    this.setState({game, turn}, () => {
      console.log(this.state)
      this.runGame()
    })
  }

  private getLatestGame = async () => {
    const {data: game} = await Axios.get('/api/game/latest')
    console.log(game)
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

  private runGame() {
    console.log('Running game')
    const svgObject = document.getElementById('mainMap') as HTMLObjectElement
    const map = svgObject.contentDocument.getElementById('mapSvg')

    const armyObject = document.getElementById('army') as HTMLObjectElement
    const army = armyObject.contentDocument.getElementById('armySvg')

    const fleetObject = document.getElementById('fleet') as HTMLObjectElement
    const fleet = fleetObject.contentDocument.getElementById('fleetSvg')

    console.log(fleet)

    game.setup({map, army, fleet}, this.state.turn)
    game.run()
  }
}
