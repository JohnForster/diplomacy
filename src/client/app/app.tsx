import {Component, h} from 'preact'
import Router, { RouterOnChangeArgs, route } from 'preact-router'

import Game from './components/game'
import Login from './components/login/login'
import RegistrationBox from './components/login/registrationBox/registrationBox'
import checkAuthentication from './_helpers/checkAuthentication';
import Axios from 'axios';

export interface IAppProps {}

interface IAppState {
  isLoggedIn: boolean,
  userID: string
}

export default class App extends Component <IAppProps, IAppState> {
  state: IAppState = {
    isLoggedIn: false,
    userID: null,
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
    const authID = await checkAuthentication()
    if (authID) {
      this.setState({
        userID: authID,
        isLoggedIn: true,
      }, () => {
        route('/game', true)
      })
    }
  }

  logOut = async () => {
    console.log(await Axios.get('/logout'))
    route('/', true)
    this.setState({
      userID: null,
      isLoggedIn: false,
    })
  }

  render(props: IAppProps, state: IAppState) {
    return (
      <Router onChange={this.handleRoute}>
        <Game path='/game' userID={state.userID} logOut={this.logOut}/>
        <RegistrationBox path='/register'/>
        <Login path='/' toggleLogIn={this.toggleLogIn}/>
      </Router>
    )
  }
}
