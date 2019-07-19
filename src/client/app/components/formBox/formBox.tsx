import { Component, h } from 'preact'

import './formBox.scss'

export default class FormBox extends Component {
  render() {
    return (
      <div className="formBox">
        {this.props.children}
      </div>
    )
  }
}
