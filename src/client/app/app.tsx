import {h, Component} from 'preact'

import Game from './components/game'
import Login from './components/login'

export interface IAppProps {
  message: string
}

interface IAppState {
  jwt: string,
  isLoggedIn: boolean
}

export default class App extends Component <IAppProps, IAppState> {
  render(props: IAppProps, state: IAppState) {
    return (
      <div>
        {state.isLoggedIn  ? <Game/> : <Login/>}
      </div>
    )
  }
}