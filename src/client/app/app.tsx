import {Component, h} from 'preact'
import Router, { RouterOnChangeArgs, route } from 'preact-router'

import Game from './components/game'
import Login from './components/login/login'
import RegistrationBox from './components/login/registrationBox/registrationBox'
import checkAuthentication from './_helpers/checkAuthentication';

export interface IAppProps {}

interface IAppState {
  isLoggedIn: boolean
}

export default class App extends Component <IAppProps, IAppState> {
  state: IAppState = {
    isLoggedIn: false,
  }

  componentDidMount() {
    this.checkAuthentication()
  }

  handleRoute = async (event: RouterOnChangeArgs) => {
    switch (event.url) {
      case '/game':
        console.log('attempting to route to /game')
        const isAuthed = this.state.isLoggedIn
        isAuthed ? route('/game', true) : route('/', true)
    }
  }

  toggleLogIn = (isLoggedIn?: boolean) => {
    if (isLoggedIn) return this.setState({isLoggedIn})
    return this.setState({isLoggedIn: !this.state.isLoggedIn})
  }

  checkAuthentication = async () => {
    if (await checkAuthentication) {
      this.setState({isLoggedIn: true}, () => {
        route('/game', true)
      })
    }
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
