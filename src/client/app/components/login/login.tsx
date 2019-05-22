import {Component, h} from 'preact'

import to from 'await-to-js'
import axios from 'axios'
import clone from 'lodash/clone'

import { route, Link } from 'preact-router'

export interface ILoginProps {
  toggleLogIn: (arg: boolean) => void
}

interface ILoginState {
  formFields?: {
    username?: string,
    password?: string,
  }
}

export default class Login extends Component <ILoginProps, ILoginState> {
  state: ILoginState = { formFields: {} }

  render(props: ILoginProps, state: ILoginState) {
    return (
      <div>
        <button onClick={() => {route('/game', true)}}> Game </button>
        <form action='api/user/authenticate' method='post' onSubmit={this.login}>
          Username:<br/>
          <input type='text' name='username' onChange={this.handleChange('username')}/><br/>
          Password:<br/>
          <input type='text' name='password' onChange={this.handleChange('password')}/><br/>
          <input type='submit' value='Submit'/>
        </form>
        <p> New member? Register 
          <Link href='/register'>here</Link>
        </p>
      </div>
    )
  }

  login = async (evt: Event) => {
    evt.preventDefault()
    console.log('attempting to log in')
    const [err, res] = await to(axios.post('api/login', this.state.formFields))
    if (err) {
      console.log('logging an err')
      console.log(err)
    }
    if (res) {
      console.log('success!')
      console.log(res.data)
      this.props.toggleLogIn(true)
      route('/game')
    }
  }

  handleChange = (field: 'username' | 'password') => {
    return (event: Event) => {
      const formFields = clone(this.state.formFields)
      formFields[field] = (event.target as HTMLInputElement).value
      this.setState({formFields})
    }
  }
}