import { IGameTurn } from '@server/models/turn.model'
import Order from '../order'
import entityLocations from '../resources/entityLocations'

export default class BoardPainter {
  board: HTMLElement
  turn: IGameTurn

  constructor(board: HTMLElement, turn: IGameTurn) {
    this.board = board
    this.turn = turn
    this.draw()
  }

  draw = () => {
    this.turn.players.forEach((player) => {
      this.colourTerritories(player.ownedTerritories, player.empire)
      this.drawMoves(player.moves.map(Order.from))
      this.drawUnits(player.ownedUnits, player.empire)
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

  private colourTerritories = (territories: string[], empire: string) => {
    territories.forEach((territory) => this.setOwnership(territory, empire))
  }

  private drawUnits(units: {unitType: string, location: string, status: string}[], empire: string) {
    units.forEach((unit) => this.drawUnit(unit, empire))
  }

  private drawMoves = (orders: Order[]) => {
    orders.forEach((order) => this.drawOrder(order))
  }

  private setOwnership = (territory: string, owner: string) => {
    const territoryElements = Array.from(this.board.getElementsByClassName(territory))
    territoryElements.forEach((terr) => {
      terr.classList.remove('England', 'France', 'Germany', 'Austria', 'Russia', 'Italy', 'Turkey')
      terr.classList.add(owner)
    })
  }

  private drawUnit = (unit: {unitType: string, location: string, status: string}, empire: string) => {
    const unitClasses: {[key: string]: string} = {Fleet: '#F', Army: '#A'}
    const svgUnit = document.createElementNS('http://www.w3.org/2000/svg', 'use')
    const location = entityLocations[unit.location]
    svgUnit.setAttribute('href', unitClasses[unit.unitType])
    svgUnit.setAttribute('class', 'unit')
    svgUnit.setAttribute('class', empire)
    svgUnit.setAttribute('transform', `translate(${location.x}, ${location.y})`)
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
