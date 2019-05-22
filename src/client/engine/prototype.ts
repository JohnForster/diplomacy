import to from 'await-to-js'
import axios, { AxiosResponse } from 'axios'

import { ITurnModel } from '@server/models/turn.model'
import Country from './resources/country.enum'
import entityLocations from './resources/entityLocations'
import exampleGameState from './resources/exampleGameState'
import exampleMovesJson from './resources/exampleMoves'
import tilesData from './resources/tilesData'

export default new class Prototype {
  private svg: HTMLElement
  private tileSelected: string
  private units: any // units type?
  private playerCountry: string = 'England'

  run = () => {}

  setup = (svg: HTMLElement, turn: any) => {
    this.svg = svg
    const tiles = Array.from(svg.getElementsByClassName('seaTile') as HTMLCollectionOf<HTMLElement>)
    tiles.push(...Array.from(svg.getElementsByClassName('landTile') as HTMLCollectionOf<HTMLElement>))
    tiles.forEach((tile) => {
      tile.addEventListener('click', (evt) => { this.onClick(tile.getAttribute('title')) })
    })

    // Create objects for units and territory etc.
    // And then draw from internal state?
    // Easier to check rules.

    this.asyncSetup(turn)
  }

  private asyncSetup = async (turn: any) => {
    // const [err, res] = await to(axios.get('/game/5cc5d578382f88cc84d4f6e2'))
    // const [err, res] = await to(axios.get('/game/5ce1446377f920956aaf2e22'))
    // console.log(res)
    // if (err) { throw new Error('No game data found') }
    const gameState: ITurnModel = turn
    console.log('performing setup with turn: ', turn)
    gameState.players.forEach((player) => {
      player.ownedTerritories.forEach((territory) => {
        this.setOwnership(territory, player.empire)
      })
      console.log('drawing', player.ownedUnits, player.empire)
      this.drawUnits(player.ownedUnits, player.empire)
    })

      // const empires = res.data.territories
      // empires.forEach((empire: {empire: string, ownedTerritories: string[]}) => {
      //   empire.ownedTerritories.forEach((territory) => this.setOwnership(territory, empire.empire))
      // })
    // }
    // this.drawUnits(exampleGameState)
    // this.drawInstructions(JSON.parse(exampleMovesJson))
  }

  private onClick = (territory: string) => {
    if (this.tileSelected) {
      this.finishOrder(territory)
      this.drawLine(entityLocations[this.tileSelected], entityLocations[territory])
      this.tileSelected = null
    } else {
      this.startOrder(territory)
    }
  }

  private finishOrder = (territory: string) => {
    // if (territory.borders(this.tileSelected)) {...}
    if (tilesData[this.tileSelected].includes(territory)) {
      this.drawLine(entityLocations[this.tileSelected], entityLocations[territory])
      this.tileSelected = null
    }
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

  private drawLine = (start: {x: number, y: number}, end: {x: number, y: number}) => {
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'path')
    line.setAttribute('d', `M ${start.x} ${start.y} L ${end.x} ${end.y}`) // Set path's data
    // line.style.stroke = color || '#000' // Set stroke colour
    line.setAttribute('stroke', 'green')
    line.style.strokeWidth = '2px'
    line.style.markerEnd = 'url(#triangle)'
    this.svg.appendChild(line)
  }

  // ! TYPESCRIPT NEEDS TYPE FOR UNITS
  private drawUnits = (units: any[], empire: string) => {
    units.forEach((unit) => {
      console.log('Drawing unit: ', unit)
      this.drawUnit(unit.location, empire, unit.unitType)
    })
  }

  private drawUnit = (unitLocation: string, playerCountry: string, unitType: string) => {
    console.log(unitType)
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
