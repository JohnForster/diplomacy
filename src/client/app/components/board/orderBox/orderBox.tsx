import {Component, h, Fragment} from 'preact'
import { OrderType } from '@shared/types'

import * as Styled from './styled'

export interface IOrderBoxProps {
  onMoveSelect: (move: OrderType) => () => void,
  currentMove:  OrderType,
  activeTerritory: string,
}

interface IOrderBoxState {

}

// ! Hardcoded for now.
const possibleOrders = ['Move', 'Support', 'Hold']

export default class OrderBox extends Component <IOrderBoxProps, IOrderBoxState> {
  render(props: IOrderBoxProps, state: IOrderBoxState) {
    return (
      <Styled.OrderBox>
        <Styled.OrderTitle>{props.activeTerritory}</Styled.OrderTitle><br/>
        {possibleOrders.map(order =>  (
          <Fragment>
            <Styled.OrderButton
              selected={order.toLowerCase() === props.currentMove}
              onClick={props.onMoveSelect(order.toLowerCase() as OrderType)}
            >
                {order}
            </Styled.OrderButton><br/>
          </Fragment>

        ))}
        <Styled.CancelButton onClick={props.onMoveSelect(null)}>Cancel</Styled.CancelButton><br/>
      </Styled.OrderBox>
    )
  }
}