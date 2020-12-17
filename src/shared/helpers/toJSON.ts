import { IGameTurnDB, IGameTurnJSON } from "@shared/types";

export default (turn: IGameTurnDB): IGameTurnJSON => {
  return JSON.parse(JSON.stringify(turn));
};
