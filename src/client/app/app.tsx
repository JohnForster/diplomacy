import {Component, h} from 'preact'
import Router, { route, RouterOnChangeArgs } from 'preact-router'

import Axios from 'axios'
import checkAuthentication from './_helpers/checkAuthentication'
import Game from './components/game'
import Login from './components/login/login'
import RegistrationBox from './components/login/registrationBox/registrationBox'

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

  handleRoute = async (event: RouterOnChangeArgs) => {
    switch (event.url) {
      case '/game':
        console.log('attempting to route to /game')
        const isAuthed = await this.checkAuthentication()
        if (!isAuthed) route('/', true)
    }
  }

  toggleLogIn = (isLoggedIn?: boolean) => {
    if (isLoggedIn) {
      this.setState({isLoggedIn}, this.checkAuthentication)
    }
    return this.setState({isLoggedIn: !this.state.isLoggedIn})
  }

  checkAuthentication = async () => {
    const authID = await checkAuthentication()
    console.log(`authID: ${authID}`)
    if (authID) {
      this.setState({
        userID: authID,
      })
      return true
    }
    return false
  }

  logOut = async () => {
    await Axios.get('/logout')
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
