import Axios from 'axios'
import {Component, h} from 'preact'
import Router, { route, RouterOnChangeArgs } from 'preact-router'
import {lazy, Suspense} from 'preact/compat'


import checkAuthentication from './_helpers/checkAuthentication'
import './app.scss'
import './variables/colors.scss'
import Lobby from './pages/lobby/lobby'

const Game = lazy(() => import('./pages/game/game'))
const Login = lazy(() => import('./pages/login/login'))
const Register = lazy(() => import('./pages/register/register'))

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
    console.log(`Attempting to route to ${event.url}`)
    const isAuthed = await this.checkAuthentication()
    if (isAuthed  && (event.url === '/' || event.url === '/register')) return route('/game', true)
    if (!isAuthed && (event.url === '/game' || event.url === '/lobby')) return route('/', true)
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
      this.setState({userID: authID})
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
      <Suspense fallback={<h1>Loading!!!</h1>}>
        <div className='page'>
          <Router onChange={this.handleRoute}>
            <Game path='/game' userID={state.userID} logOut={this.logOut}/>
            <Register path='/register'/>
            <Login path='/' toggleLogIn={this.toggleLogIn}/>
            <Lobby path='/lobby'/>
          </Router>
        </div>
      </Suspense>
    )
  }
}
