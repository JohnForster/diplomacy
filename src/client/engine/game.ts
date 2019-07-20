import { IGameTurnJSON, IUnit } from '@shared/types'
import BoardPainter from './boardPainter/boardPainter'
import Order from './order'

import validateMove from '@shared/helpers/validateMove'
import neighboursTo from '@shared/resources/landTilesData'

export default new class Game {
  orders: Order[] = []
  private boardPainter: BoardPainter
  private mapSvg: HTMLElement
  private armySvg: HTMLElement
  private fleetSvg: HTMLElement
  private tileSelected: string
  private units: {[key: string]: IUnit[]} = {} // units type?
  private playerEmpire: string
  private turn: IGameTurnJSON
  private playerID: string

  run = () => {}

  // ? Player ID or empire? Should the engine be id agnostic?
  setup = (svgs: {map: HTMLElement, army: HTMLElement, fleet: HTMLElement}, turn: IGameTurnJSON, playerID: string) => {
    this.mapSvg = svgs.map
    this.armySvg = svgs.army
    this.fleetSvg = svgs.fleet
    this.turn = turn
    this.playerID = playerID
    this.playerEmpire = this.turn.players.find((p) => p.playerID === playerID).empire
    console.log('playing as ', this.playerEmpire)

    this.turn.players.forEach((player) => this.units[player.empire] = player.ownedUnits)
    this.boardPainter = new BoardPainter(this.mapSvg, turn, this.armySvg, this.fleetSvg)
    this.orders = this.turn.players.find((player) => player.playerID === playerID).moves.map(Order.from)
    this.boardPainter.redraw()
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

  clearMap = () => {
    if (!this.mapSvg) return
    const units = Array.from(this.mapSvg.getElementsByClassName('unit'))
    units.forEach(unit => unit.remove())
    const orders = Array.from(this.mapSvg.getElementsByClassName('order'))
    orders.forEach(order => order.remove())
  }

  private onClick = (territory: string) => {
    if (this.tileSelected
      && neighboursTo[this.tileSelected].includes(territory)
      ) {
        this.finishOrder(territory)
        console.log('finishingOrder')
      } else {
      console.log('startingOrder')
      this.startOrder(territory)
    }
  }

  private finishOrder = (territory: string) => {
    console.log(this.units[this.playerEmpire], this.tileSelected)
    const unit = this.units[this.playerEmpire].find(u => u.location === this.tileSelected)
    this.orders = this.orders.filter((order) => {
      return order.from !== this.tileSelected
    })

    console.log(this.turn)

    // ! MOVE TYPE is currently hard coded!
    const newOrder = new Order(unit.unitType, this.tileSelected, territory, 'Move')

    console.log(validateMove(this.turn, newOrder.toObject(), this.playerID))

    if (validateMove(this.turn, newOrder.toObject(), this.playerID)) {
      this.orders.push(newOrder)
      this.boardPainter.redrawOrders(this.orders)
      this.tileSelected = null
    }
  }

  private startOrder = (territory: string) => {
    if (this.playerHasUnitAt(territory)) {
      this.tileSelected = territory
    }
  }

  private playerHasUnitAt = (territory: string) => {
    const unit = this.units[this.playerEmpire].find((unit: any) => {
      return unit.location === territory
    })
    return !!unit
  }
} ()
