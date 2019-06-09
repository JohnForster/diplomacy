import {Component, h} from 'preact'

import setupNewFullGame from '../../devTools/setupGame'
import Axios from 'axios';
import Engine from '../../engine/prototype'

export interface IGameProps {

}

interface IGameState {
  game?: object,
  turn?: object,
}

export default class Game extends Component <IGameProps, IGameState> {
  state: IGameState = {}
  render(props: IGameProps, state: IGameState) {
    return (
      <div>
        <button onClick={this.setupGame}>Set Up Game</button><br/>
        <div className='map'>
          <img class='bg' src='./assets/paperTexture.jpg' />
          <object id='mainMap' type='image/svg+xml' data='assets/Diplomacy.svg' class='europeMap'>
            There should be a diplomacy map here...
          </object>
        </div>
      </div>
    )
  }

  // ? Move axios requests into a helper service?
  private setupGame = async () => {
    const {data: game} = await setupNewFullGame()
    console.log(game)
    const {data: turn} = await Axios.get(`api/turn/${game.currentTurn}`)
    this.setState({game, turn}, () => {
      this.runGame()
    })
  }

  private async fetchGame(id: string) {
    const game = await Axios.get(`/api/game/id`)
    this.setState({game})
  }

  private runGame() {
    console.log('Running game')
    const svgObject = document.getElementById('mainMap') as HTMLObjectElement
    const svg = svgObject.contentDocument.getElementById('mapSvg')
    console.log(this.state.turn)
    Engine.setup(svg, this.state.turn)
    Engine.run()
  }
}
