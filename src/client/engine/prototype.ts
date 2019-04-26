import axios, { AxiosResponse } from 'axios'
import to from 'await-to-js'

import colours from '../resources/colours'
import entityLocations from '../resources/entityLocations'
import exampleMovesJson from '../resources/exampleMoves'
import startingTerritories from '../resources/startingTerritories'


import Country from '../resources/country.enum'

export default new class Prototype {
  private svg: HTMLElement
  private state: {'territories': {[key: string]: string[]}}
  private tileSelected: string
  private units: any // units type?
  private svgJs: any
  private playerCountry: string = "England"
  

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
    // Create objects for units and territory etc.
    // And then draw from internal state?
    // Easier to check rules.


    this.drawInstructions(JSON.parse(exampleMovesJson))
    this.asyncSetup()
  }

  private asyncSetup = async () => {
      const units:any = await axios.get('/game')
      this.units = units.data
      this.drawUnits(units.data)
  }

  private onClick = (territory: string) => {
    if (this.tileSelected) {
      this.drawLine(entityLocations[this.tileSelected], entityLocations[territory])
      this.tileSelected = null
    } else {
      this.startOrder(territory)
    }
  }

  private startOrder = (territory: string) => {
    if (this.playerHasUnitAt(territory)){
      this.tileSelected = territory
    }
  }

  private playerHasUnitAt = (territory: string) => {
    const unit = this.units[this.playerCountry].find((unit: any) => {
      return unit.location === territory
    })
    return !!unit
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

  // Enum for countries?
  private drawUnits = (gameState: {[key: string]: {unitType: string, location: string}[]}) => {
    for (let n in Country) {
      if (Country.hasOwnProperty(n)) {
        const country = Country[n]
        if (!gameState[country]) {continue}

        gameState[country].forEach((unit) => {
          this.drawUnit(unit.location, country, unit.unitType)
        })
        // gameState[country].armies.forEach((armyLocation) => {
        //   this.drawTank(armyLocation, country)
        // })
      }
    }
  }

  private drawUnit = (unitLocation: string, playerCountry: string, unitType: string) => {
    const unitClasses: {[key: string]: string} = {fleet: '#F', army: '#A'}
    const unit = document.createElementNS('http://www.w3.org/2000/svg', 'use')
    const location = entityLocations[unitLocation]
    unit.setAttribute('href', unitClasses[unitType])
    unit.setAttribute('class', playerCountry)
    unit.setAttribute('transform', `translate(${location.x}, ${location.y})`)
    this.svg.appendChild(unit)
  }

  // private drawFleet = (fleetLocation: string, playerCountry:string) => {
  //   const ship = document.createElementNS('http://www.w3.org/2000/svg', 'use')
  //   const location = entityLocations[fleetLocation]
  //   ship.setAttribute('href', '#F')
  //   ship.setAttribute('class', playerCountry)
  //   ship.setAttribute('transform', `translate(${location.x}, ${location.y})`)
  //   this.svg.appendChild(ship)
  // }

  // private drawTank = (armyLocation: string, playerCountry:string) => {
  //   const army = document.createElementNS('http://www.w3.org/2000/svg', 'use')
  //   const location = entityLocations[armyLocation]
  //   army.setAttribute('href', '#A')
  //   army.setAttribute('class', playerCountry)
  //   army.setAttribute('transform', `translate(${location.x}, ${location.y})`)
  //   this.svg.appendChild(army)
  // }

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
