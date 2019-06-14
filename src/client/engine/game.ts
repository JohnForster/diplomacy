import { IGameTurn } from '@server/models/turn.model'
import Order from './order'
import neighboursTo from './resources/tilesData'
import BoardPainter from './boardPainter/boardPainter'

export default new class Game {
  orders: Order[] = []
  private boardPainter: BoardPainter
  private mapSvg: HTMLElement
  private armySvg: HTMLElement
  private fleetSvg: HTMLElement
  private tileSelected: string
  private units: any = {} // units type?
  private playerCountry: string = 'England'
  private turn: IGameTurn

  run = () => {}

  // ? Player ID or empire? Should the engine be id agnostic?
  setup = (svgs: {map: HTMLElement, army: HTMLElement, fleet: HTMLElement}, turn: IGameTurn, empire?: string) => {
    this.mapSvg = svgs.map
    this.armySvg = svgs.army
    this.fleetSvg = svgs.fleet
    this.turn = turn
    if (empire) this.orders = this.turn.players.find(player => player.empire === empire).moves.map(Order.from)
    this.turn.players.forEach(player => this.units[player.empire] = player.ownedUnits)
    this.boardPainter = new BoardPainter(this.mapSvg, turn, this.armySvg, this.fleetSvg)
    // this.playerCountry = this.turn.players[playerID].empire

    const tiles = Array.from(this.mapSvg.getElementsByClassName('seaTile') as HTMLCollectionOf<HTMLElement>)
    tiles.push(...Array.from(this.mapSvg.getElementsByClassName('landTile') as HTMLCollectionOf<HTMLElement>))
    tiles.forEach((tile) => {
      tile.addEventListener('click', (evt) => { this.onClick(tile.getAttribute('title')) })
    })
    const units = Array.from(this.mapSvg.getElementsByClassName('unit') as HTMLCollectionOf<HTMLElement>)
    units.forEach((unit) => {
      unit.addEventListener('click', (evt) => this.onClick(unit.classList[2]))
    })
  }

  private onClick = (territory: string) => {
    if (this.tileSelected
      && neighboursTo[this.tileSelected].includes(territory)
    ) {
      this.finishOrder(territory)
    } else {
      this.startOrder(territory)
    }
  }

  private finishOrder = (territory: string) => {
    this.orders = this.orders.filter((m) => {
      return m.from !== this.tileSelected
    })
    // ! Unit type AND MOVE TYPE are currently hard coded!
    const order = new Order('Army', this.tileSelected, territory, 'Move')
    this.orders.push(order)
    this.boardPainter.redrawOrders(this.orders)
    this.tileSelected = null
  }

  private startOrder = (territory: string) => {
    if (this.playerHasUnitAt(territory)) {
      this.tileSelected = territory
    }
  }

  private playerHasUnitAt = (territory: string) => {
    const unit = this.units[this.playerCountry].find((unit: any) => {
      return unit.location === territory
    })
    return !!unit
  }
} ()
