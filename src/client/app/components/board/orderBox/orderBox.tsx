import { Component, h } from "preact";
import { OrderType } from "@shared/types";

import * as Styled from "./styled";

export interface IOrderBoxProps {
  onMoveSelect: (move: OrderType) => () => void;
  activeTerritory: string;
}

interface IOrderBoxState {}

export default class OrderBox extends Component<
  IOrderBoxProps,
  IOrderBoxState
> {
  render(props: IOrderBoxProps, state: IOrderBoxState) {
    return (
      <Styled.OrderBox>
        <Styled.OrderTitle>{props.activeTerritory}</Styled.OrderTitle>
        <br />
        <span onClick={props.onMoveSelect("move")}>Move</span>
        <br />
        <span onClick={props.onMoveSelect("support")}>Support</span>
        <br />
        <span onClick={props.onMoveSelect("hold")}>Hold</span>
        <br />
        <span onClick={props.onMoveSelect(null)}>Cancel</span>
        <br />
      </Styled.OrderBox>
    );
  }
}
