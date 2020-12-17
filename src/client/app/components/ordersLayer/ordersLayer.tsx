import { Component, Fragment, h } from "preact";

import {
  IGame,
  IGameBoard,
  IGameTurnJSON,
  IMove,
  OrderType,
} from "@shared/types";

import Order from "./order/order";

export interface IOrdersLayerProps {
  turnData: IGameTurnJSON;
  boardData: IGameBoard;
  newOrders: IMove[];
}

interface IOrdersLayerState {}

export default class OrdersLayer extends Component<
  IOrdersLayerProps,
  IOrdersLayerState
> {
  markerColours = {
    support: "brown",
    move: "lightgray",
    retreat: "blue",
  };

  order: { [order in OrderType]?: number } = {
    move: 1,
    support: 0,
  };

  render(props: IOrdersLayerProps, state: IOrdersLayerState) {
    return (
      <Fragment>
        <defs>
          {Object.entries(this.markerColours).map(([moveType, colour]) => (
            <marker
              id={`head-${moveType}`}
              orient="auto"
              markerWidth="2"
              markerHeight="4"
              refX="0.1"
              refY="2"
            >
              <path d="M0,0 V4 L2,2 Z" fill={colour} />
            </marker>
          ))}
        </defs>
        {props.turnData &&
          props.turnData.players.map((player) =>
            player.moves
              .sort((a, b) => this.order[a.moveType] - this.order[b.moveType])
              .map((order, i) => (
                <Order
                  key={`order-a-${i}-${Date.now()}`}
                  {...order}
                  boardData={props.boardData}
                />
              ))
          )}
        {props.newOrders &&
          props.newOrders
            .sort((a, b) => this.order[a.moveType] - this.order[b.moveType])
            .map((order, i) => (
              <Order
                key={`order-b-${i}-${Date.now()}`}
                {...order}
                boardData={props.boardData}
              />
            ))}
      </Fragment>
    );
  }
}
