const UnitType = {
  FLEET : 'Fleet',
  ARMY : 'Army',
} as const
type UnitType = (typeof UnitType)[keyof typeof UnitType]

export default UnitType
