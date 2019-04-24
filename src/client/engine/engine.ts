import Country from "@client/resources/country.enum"
import Territory from '@client/resources/territory.enum';

type GameState = {
  terrain: Terrain,
  units: Units,
  orders: Order[]
}

type Terrain = {
  [key: string]: string[]
}

type Units = {
  [key: string]: {
    armies?: string[],
    fleets?: string[],
  }
}
type Order = {
  orderType: string,
  startingLocation: string,
  end: string,
}

export default class Engine {
  private userId: string
  private sessionId: string
  private gameState: GameState

  constructor(userId: string, sessionId: string, gameId: string) {
    const session = this.getSession() // ?
    this.userId = userId
    this.sessionId = sessionId
    // this.gameState = getGameState(gameId)
  }

  private getSession = () => {
    return {id: '', userId: ''}
  }
}