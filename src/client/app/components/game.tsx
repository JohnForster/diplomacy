import {Component, h} from 'preact'

import Engine from '../../engine/prototype'

export interface IGameProps {
  
}

interface IGameState {
  
}

export default class Game extends Component <IGameProps, IGameState> {
  state: IGameState = {}
  render(props: IGameProps, state: IGameState) {
    return (
      <div className='map'>
      <img class='bg' src='./assets/paperTexture.jpg' />
        <object id='mainMap' type='image/svg+xml' data='assets/Diplomacy.svg' class='europeMap' onLoad={this.runGame}>
          There should be a diplomacy map here...
        </object>
      </div>
    )
  }

  private runGame() {
    const svgObject = document.getElementById('mainMap') as HTMLObjectElement
    const svg = svgObject.contentDocument.getElementById('mapSvg')
    Engine.setup(svg)
    Engine.run()
  }
}