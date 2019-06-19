export interface IPlayerState {
  playerID: string,
  colour: string,
  empire: string,
  ownedTerritories: string[],
  ownedUnits: {
    unitType: string,
    location: string,
    status: string,
  }[],
  moves: IMove[],
}

export interface IGameTurn {
  info: {
    phaseNumber: number,
    year: number,
    season: string,
    phase: string,
    timeStarted: number,
    timeEnds: string,
    isComplete: boolean,
  },
  players: IPlayerState[],
}

export interface IMove {
  unit: string,
  moveType: string,
  from: string,
  to: string,
  supportFrom: string,
  wasSuccessful: boolean,
}