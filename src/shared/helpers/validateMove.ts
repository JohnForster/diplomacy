import { IGameTurnJSON, IMove } from '@shared/types'
import areAdjacent from './areAdjacent'

const phases: {[key: string]: string[]} = {
  movement: ['Move', 'support', 'hold'],
  retreat: ['retreat'],
  build: ['build', 'disband'],
}

const findPlayer = (turn: IGameTurnJSON) => (playerID: string) => {
  return turn.players.find((player) => player.playerID === playerID)
}

const findUnit = (playerState: IGameTurnJSON['players'][0]) => (from: string) => {
  return playerState.ownedUnits.find((unit) => unit.location === from)
}


const validateMove = (turn: IGameTurnJSON, move: IMove, playerID: string): boolean => {
  // Find player in game turn

  const player = findPlayer(turn)(playerID)
  if (!player) {
    console.log('Player not found')
    return false
  }

  // Check if player has unit at this location
  const unit = findUnit(player)(move.from)
  if (!unit) {
    console.log('Unit not found')
    return false
  }

  // Check if the movement type is appropriate for the phase
  const possibleMoves = phases[turn.info.phase] || []
  if (!possibleMoves.includes(move.moveType)) {
    console.log('not included', move.moveType)
    console.log(`turn.info.phase: ${turn.info.phase}`)
    return false
  }

  const isAdjacentToDestination = areAdjacent(move.to)

  switch (move.moveType) {
    case 'Move':
      // Check that destination is adjacent
      if (!isAdjacentToDestination(move.from)) {
        console.log('is not adjacent')
        return false
      }
      // TODO Check that unit can move there (land/sea)

      return true

    case 'support':
      // Check that destination is adjacent
      if (!isAdjacentToDestination(move.from)) return false
      // TODO Check that unitType can support in that way

      // Check that support from is adjacent to destination
      if (!isAdjacentToDestination(move.supportFrom)) return false
      return true

    case 'retreat':
      // Check that destination is adjacent
      if (!isAdjacentToDestination(move.from)) return false

      // TODO Check that destination is empty

      return true

    case 'hold': return true
    case 'disband': return true
  }
  return false
}

export default validateMove
