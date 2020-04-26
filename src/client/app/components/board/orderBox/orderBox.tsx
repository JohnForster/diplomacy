import {Component, h} from 'preact'
import { OrderType } from '@shared/types'

import './orderBox.scss'

export interface IOrderBoxProps {
  onMoveSelect: (move: OrderType) => () => void,
  activeTerritory: string,
}

interface IOrderBoxState {

}

export default class OrderBox extends Component <IOrderBoxProps, IOrderBoxState> {
  render(props: IOrderBoxProps, state: IOrderBoxState) {
    return (
      <div className='orderBox'>
        <span className='orderTitle'>{props.activeTerritory}</span><br/>
        <span onClick={props.onMoveSelect('move')}>Move</span><br/>
        <span onClick={props.onMoveSelect('support')}>Support</span><br/>
        <span onClick={props.onMoveSelect('hold')}>Hold</span><br/>
        <span onClick={props.onMoveSelect(null)}>Cancel</span><br/>
      </div>
    )
  }
}