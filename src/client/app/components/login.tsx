import {Component, h} from 'preact'

import to from 'await-to-js'
import axios from 'axios'

export interface ILoginProps {
  
}

interface ILoginState {
  
}

export default class Login extends Component <ILoginProps, ILoginState> {
  public render(props: ILoginProps, state: ILoginState) {
    return (
      <div>
        <button value="log in" onClick={this.logIn}/>
        <form action='/user/register' method='post'>
          Username:<br/>
          <input type='text' name='username'/><br/>
          Name:<br/>
          <input type='text' name='name'/><br/>
          Email:<br/>
          <input type='text' name='email'/><br/>
          Password:<br/>
          <input type='text' name='password'/><br/>
          <input type='submit' value='Submit' />
        </form>

        <form action='/user/authenticate' method='post'>
          Username:<br/>
          <input type='text' name='username'/><br/>
          Password:<br/>
          <input type='text' name='password'/><br/>
          <input type='submit' value='Submit'/>
        </form>
      </div>
    )
  }

  logIn = async () => {
    const [err, res] = await to(axios.post('/user/authenticate', {
      username: 'john',
      password: 'johnspassword',
    }))
    console.log(err)
    console.log(res)
  }
}