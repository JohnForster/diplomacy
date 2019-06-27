import { IGameTurnJSON } from '@shared/types'
import BoardPainter from './boardPainter/boardPainter'
import Order from './order'

import validateMove from '@shared/helpers/validateMove'
import neighboursTo from '@shared/resources/tilesData'

export default new class Game {
  orders: Order[] = []
  private boardPainter: BoardPainter
  private mapSvg: HTMLElement
  private armySvg: HTMLElement
  private fleetSvg: HTMLElement
  private tileSelected: string
  private units: any = {} // units type?
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

    this.orders = this.turn.players.find((player) => player.playerID === playerID).moves.map(Order.from)
    this.turn.players.forEach((player) => this.units[player.empire] = player.ownedUnits)
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
        console.log('finishingOrder')
      } else {
      console.log('startingOrder')
      this.startOrder(territory)
    }
  }

  private finishOrder = (territory: string) => {
    this.orders = this.orders.filter((order) => {
      return order.from !== this.tileSelected
    })

    // ! Unit type AND MOVE TYPE are currently hard coded!
    const newOrder = new Order('Army', this.tileSelected, territory, 'Move')

    console.log('validating move...')
    console.log(validateMove(this.turn, newOrder, this.playerID))

    if (validateMove(this.turn, newOrder, this.playerID)) {
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
