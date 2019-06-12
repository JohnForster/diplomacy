import { IGameTurn, ITurnModel } from '@server/models/turn.model'
import remove from 'lodash/remove'
import Order from './move'
import entityLocations from './resources/entityLocations'
import neighboursTo from './resources/tilesData'

export default new class Prototype {
  orders: Order[] = []

  private svg: HTMLElement
  private tileSelected: string
  private units: any = {} // units type?
  private playerCountry: string = 'England'
  private turn: IGameTurn

  run = () => {}

  setup = (svg: HTMLElement, turn: IGameTurn) => {
    this.svg = svg
    this.turn = turn

    const tiles = Array.from(svg.getElementsByClassName('seaTile') as HTMLCollectionOf<HTMLElement>)
    tiles.push(...Array.from(svg.getElementsByClassName('landTile') as HTMLCollectionOf<HTMLElement>))
    tiles.forEach((tile) => {
      tile.addEventListener('click', (evt) => { this.onClick(tile.getAttribute('title')) })
    })
    turn.players.forEach((player) => {
      player.ownedTerritories.forEach((territory) => {
        this.setOwnership(territory, player.empire)
      })

      this.units[player.empire] = player.ownedUnits
      this.drawUnits(player.ownedUnits, player.empire)

      player.moves.forEach(this.drawOrder)
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
    this.drawOrder(order)
    this.tileSelected = null
    this.redraw()
  }

  private drawOrder = (order: Order) => {
    this.drawLine(entityLocations[order.from], entityLocations[order.to])
  }

  private startOrder = (territory: string) => {
    if (this.playerHasUnitAt(territory)) {
      this.tileSelected = territory
    }
  }

  private redraw = () => {
    const orderArray = Array.from(this.svg.getElementsByClassName('order'))
    orderArray.forEach((order) => order.remove())
    this.orders.forEach(this.drawOrder)
  }

  private playerHasUnitAt = (territory: string) => {
    const unit = this.units[this.playerCountry].find((unit: any) => {
      return unit.location === territory
    })
    return !!unit
  }

  private drawLine = (start: {x: number, y: number}, end: {x: number, y: number}) => {
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'path')
    line.setAttribute('d', `M ${start.x} ${start.y} L ${end.x} ${end.y}`) // Set path's data
    // line.style.stroke = color || '#000' // Set stroke colour
    line.setAttribute('stroke', 'green')
    line.setAttribute('class', 'order')
    console.log(line)
    line.style.strokeWidth = '2px'
    line.style.markerEnd = 'url(#triangle)'
    this.svg.appendChild(line)
  }

  // ! TYPESCRIPT NEEDS TYPE FOR UNITS
  private drawUnits = (units: any[], empire: string) => {
    units.forEach((unit) => {
      this.drawUnit(unit.location, empire, unit.unitType)
    })
  }

  private drawUnit = (unitLocation: string, playerCountry: string, unitType: string) => {
    const unitClasses: {[key: string]: string} = {Fleet: '#F', Army: '#A'}
    const unit = document.createElementNS('http://www.w3.org/2000/svg', 'use')
    const location = entityLocations[unitLocation]
    unit.setAttribute('href', unitClasses[unitType])
    unit.setAttribute('class', playerCountry)
    unit.setAttribute('transform', `translate(${location.x}, ${location.y})`)
    this.svg.appendChild(unit)
  }

  private drawInstructions = (instructions: {moves: {start: string, end: string, country: string}[] }) => {
    instructions.moves.forEach((move) => {
      this.drawLine(entityLocations[move.start], entityLocations[move.end])
    })
  }

  private setOwnership = (territory: string, owner: string) => {
    const territoryElements = Array.from(this.svg.getElementsByClassName(territory))
    territoryElements.forEach((terr) => {
      terr.classList.remove('England', 'France', 'Germany', 'Austria', 'Russia', 'Italy', 'Turkey')
      terr.classList.add(owner)
    })
  }
} ()
