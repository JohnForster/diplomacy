import { IGameTurn } from '@server/models/turn.model'
import Order from '../order'
import entityLocations from '../resources/entityLocations'

export default class BoardPainter {
  board: HTMLElement
  turn: IGameTurn
  armySvg: HTMLElement

  constructor(board: HTMLElement, turn: IGameTurn, armySvg: HTMLElement) {
    this.board = board
    this.turn = turn
    this.armySvg = armySvg
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
    const unitClasses: {[key: string]: string} = {Fleet: '#F', Army: '#A'}
    // const svgUnit = document.createElementNS('http://www.w3.org/2000/svg', 'use')
    const svgUnit = this.armySvg.cloneNode(true) as HTMLElement
    const location = entityLocations[unit.location]
    svgUnit.setAttribute('href', unitClasses[unit.unitType])
    svgUnit.setAttribute('class', 'unit')
    svgUnit.setAttribute('class', empire)
    svgUnit.setAttribute('x', (location.x - 13).toString())
    svgUnit.setAttribute('y', (location.y - 18).toString())
    Array.from(svgUnit.getElementsByClassName('light')).forEach(el => el.setAttribute('class', `${colour}-light`))
    Array.from(svgUnit.getElementsByClassName('medium')).forEach(el => el.setAttribute('class', `${colour}-medium`))
    Array.from(svgUnit.getElementsByClassName('shadow')).forEach(el => el.setAttribute('class', `${colour}-shadow`))

    // svgUnit.setAttributeNS('http://www.w3.org/2000/svg', 'href', 'svg/001-tank-1.svg')
    // svgUnit.setAttribute('transform', `translate(${location.x}, ${location.y})`)
    // svgUnit.setAttribute('height', '30')
    // svgUnit.setAttribute('width', '30')
    
    // <image x="10" y="20" width="80" height="80" xlink:href="recursion.svg" />
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
