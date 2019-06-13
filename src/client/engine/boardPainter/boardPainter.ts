import { IGameTurn } from '@server/models/turn.model'
import Order from '../order'
import entityLocations from '../resources/entityLocations'

export default class BoardPainter {
  board: HTMLElement
  turn: IGameTurn
  army: HTMLElement
  fleet: HTMLElement

  constructor(board: HTMLElement, turn: IGameTurn, armySvg: HTMLElement, fleetSvg: HTMLElement) {
    this.board = board
    this.turn = turn
    this.army = armySvg
    this.fleet = fleetSvg
    this.draw()
  }

  draw = (turn?: IGameTurn) => {
    if (turn) this.turn = turn
    this.turn.players.forEach((player) => {
      this.colourTerritories(player.ownedTerritories, player.empire, player.colour)
      this.drawMoves(player.moves.map(Order.from))
      this.drawUnits(player.ownedUnits, player.empire, player.colour)
    })
  }

  reset = () => {
    this.turn.players.forEach((player) => this.colourTerritories(player.ownedTerritories, 'unowned'))
    this.removeOrders()
    this.removeUnits()
  }

  redraw = () => {
    this.reset()
    this.draw()
  }

  redrawOrders = (orders: Order[]) => {
    this.removeOrders()
    this.drawMoves(orders)
  }

  private colourTerritories = (territories: string[], empire: string, colour?: string) => {
    territories.forEach((territory) => this.setOwnership(territory, empire, colour))
  }

  private drawUnits(units: {unitType: string, location: string, status: string}[], empire: string, colour: string) {
    units.forEach((unit) => this.drawUnit(unit, empire, colour))
  }

  private drawMoves = (orders: Order[]) => {
    orders.forEach((order) => this.drawOrder(order))
  }

  private setOwnership = (territory: string, owner: string, colour: string) => {
    const territoryElements = Array.from(this.board.getElementsByClassName(territory))
    territoryElements.forEach((terr) => {
      terr.classList.remove('England', 'France', 'Germany', 'Austria', 'Russia', 'Italy', 'Turkey')
      // terr.classList.add(owner)
      terr.classList.add(`${colour}-light`)
    })
  }

  private drawUnit = (unit: {unitType: string, location: string, status: string}, empire: string, colour: string) => {
    const svg = unit.unitType === 'Army' ? this.army : this.fleet
    const svgUnit = svg.cloneNode(true) as HTMLElement
    const location = entityLocations[unit.location]
    svgUnit.setAttribute('class', `${empire} unit`)
    svgUnit.setAttribute('x', (location.x - 13).toString())
    svgUnit.setAttribute('y', (location.y - 18).toString())
    const brightnesses = ['light', 'medium', 'shadow']
    brightnesses.forEach((brightness) => {
      Array.from(svgUnit.getElementsByClassName(brightness)).forEach(el => el.setAttribute('class', `${colour}-${brightness}`))
    })
    this.board.appendChild(svgUnit)
  }

  private drawOrder = (order: Order) => {
    this.drawLine(entityLocations[order.from], entityLocations[order.to])
  }

  private drawLine = (start: {x: number, y: number}, end: {x: number, y: number}) => {
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'path')
    line.setAttribute('d', `M ${start.x} ${start.y} L ${end.x} ${end.y}`) // Set path's data
    // line.style.stroke = color || '#000' // Set stroke colour
    line.setAttribute('stroke', 'green')
    line.setAttribute('class', 'order')
    line.style.strokeWidth = '2px'
    line.style.markerEnd = 'url(#triangle)'
    this.board.appendChild(line)
  }

  private removeOrders = () => {
    const orderArray = Array.from(this.board.getElementsByClassName('order'))
    orderArray.forEach((order) => order.remove())
  }

  private removeUnits = () => {
    const unitArray = Array.from(this.board.getElementsByClassName('unit'))
    unitArray.forEach((unit) => unit.remove())
  }
}
