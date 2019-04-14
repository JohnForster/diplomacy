import colours from '../resources/colours'
import entityLocations from '../resources/entityLocations'
import exampleMovesJson from '../resources/exampleMoves'
import startingTerritories from '../startingTerritories'

declare var SVG: any
import 'svg.js'

export default new class Engine {
  private svg: HTMLElement
  private state: {'territories': {[key: string]: string[]}}
  private tileSelected: string
  private svgJs: any

  constructor() {
    this.setState(startingTerritories)
  }

  public setState = (stateAsJSON: string) => {
    this.state = JSON.parse(stateAsJSON)
  }

  public run = () => {}

  public setup = (svg: HTMLElement) => {
    this.svg = svg
    const tiles = Array.from(svg.getElementsByClassName('seaTile') as HTMLCollectionOf<HTMLElement>)
    tiles.push(...Array.from(svg.getElementsByClassName('landTile') as HTMLCollectionOf<HTMLElement>))
    tiles.forEach((tile) => {
      // tile.addEventListener('click', (evt) => { console.log(tile.getAttribute('title')) })
      tile.addEventListener('click', (evt) => { this.onClick(tile.getAttribute('title')) })
    })
    const occupiedTerritories = this.state.territories
    for (const country in occupiedTerritories) {
      if (occupiedTerritories.hasOwnProperty(country)) {
        occupiedTerritories[country].forEach((territory) => this.setOwnership(territory, country))
      }
    }

    this.drawInstructions(JSON.parse(exampleMovesJson))

  }

  private onClick = (territory: string) => {
    if (!this.tileSelected) {
      this.tileSelected = territory
      return
    } else {
      this.drawLine(entityLocations[this.tileSelected], entityLocations[territory])
      this.tileSelected = null
    }
  }

  private drawLine = (start: {x: number, y: number}, end: {x: number, y: number}, color?: string) => {
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'path')
    line.setAttribute('d',`M ${start.x} ${start.y} L ${end.x} ${end.y}`) // Set path's data
    // line.style.stroke = color || '#000' // Set stroke colour
    line.setAttribute('stroke', 'green')
    line.style.strokeWidth = '2px'
    line.style.markerEnd = 'url(#triangle)'
    this.svg.appendChild(line)
  }

  private drawInstructions = (instructions: {moves: {start: string, end: string, country: string}[] }) => {
    instructions.moves.forEach((move) => {
      this.drawLine(entityLocations[move.start], entityLocations[move.end], colours[move.country])
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
