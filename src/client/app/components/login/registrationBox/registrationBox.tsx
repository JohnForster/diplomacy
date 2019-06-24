import to from 'await-to-js'
import Axios from 'axios'
import clone from 'lodash/clone'
import {Component, h} from 'preact'
import { route } from 'preact-router'

export interface IRegistrationBoxProps {

}

interface IRegistrationBoxState {
  formFields?: {
    username?: string,
    name?: string,
    email?: string,
    password?: string,
  }
}

export default class RegistrationBox extends Component <IRegistrationBoxProps, IRegistrationBoxState> {
  state: IRegistrationBoxState = {
    formFields: {},
  }

  render(props: IRegistrationBoxProps, state: IRegistrationBoxState) {
    return (
      <div>
        <form action='/user/register' method='post'  onSubmit={this.handleSubmit}>
          Username:<br/>
          <input
            type='text'
            name='username'
            value={state.formFields.username}
            onChange={this.handleChange('username')}
          /><br/>

          Name:<br/>
          <input
            type='text'
            name='name'
            value={state.formFields.name}
            onChange={this.handleChange('name')}
          /><br/>

          Email:<br/>
          <input
            type='text'
            name='email'
            value={state.formFields.email}
            onChange={this.handleChange('email')}
          /><br/>

          Password:<br/>
          <input
            type='password'
            name='password'
            value={state.formFields.password}
            onChange={this.handleChange('password')}
          /><br/>
          <input type='submit' value='Submit' />
        </form>
      </div>
    )
  }

  private handleSubmit = async (evt: Event) => {
    evt.preventDefault()
    const [err, res] = await to(Axios.post('/user/register', this.state.formFields))
    if (err) console.log(err)
    if (res) route('/', true)
  }

  private handleChange = (field: 'username' | 'name' | 'email' | 'password') => {
    return (evt: Event) => {
      const formFields = clone(this.state.formFields)
      formFields[field] = (evt.target as HTMLInputElement).value
      this.setState({formFields})
    }
  }
}
