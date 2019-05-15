import {Component, h} from 'preact'
import Router, { RouterOnChangeArgs, route } from 'preact-router'

import Game from './components/game'
import Login from './components/login/login'
import RegistrationBox from './components/login/registrationBox/registrationBox'
import { CLIENT_RENEG_LIMIT } from 'tls';

export interface IAppProps {}

interface IAppState {
  isLoggedIn: boolean
}

export default class App extends Component <IAppProps, IAppState> {
  state: IAppState = {
    isLoggedIn: false,
  }

  handleRoute = async (event: RouterOnChangeArgs) => {
    switch (event.url) {
      case '/game':
        console.log('attempting to route to /game')
        console
        const isAuthed = this.state.isLoggedIn
        isAuthed ? route('/game', true) : route('/', true)
    }
  }

  toggleLogIn = (isLoggedIn?: boolean) => {
    if (isLoggedIn) return this.setState({isLoggedIn})
    return this.setState({isLoggedIn: !this.state.isLoggedIn})
  }

  render(props: IAppProps, state: IAppState) {
    return (
      <Router onChange={this.handleRoute}>
        <Game path='/game'/>
        <RegistrationBox path='/register'/>
        <Login path='/' toggleLogIn={this.toggleLogIn}/>
      </Router>
    )
  }
}
