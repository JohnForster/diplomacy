const PhaseType = {
  MOVEMENT : 'Movement',
  RETREAT : 'Retreat',
  ADJUSTMENT : 'Adjustment',
} as const
type PhaseType = (typeof PhaseType)[keyof typeof PhaseType]

export default PhaseType