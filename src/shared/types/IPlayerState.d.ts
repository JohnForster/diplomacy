import { Types } from "mongoose";
import { IMove, IUnit } from ".";
import Nation from "./enums/Nation";

interface IPlayerState {
  colour: string;
  empire: Nation;
  ownedTerritories: string[];
  ownedUnits: IUnit[];
  moves: IMove[];
}

export interface IPlayerStateJSON extends IPlayerState {
  playerID: string;
}

export interface IPlayerStateDB extends IPlayerState {
  playerID: Types.ObjectId;
}
