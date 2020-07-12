export interface IUnit {
  unitType: 'Army' | 'Fleet',
  location: string,
  status: string // 'Active' | 'Retreating' | 'Destroyed' ? // Is there something from the service we can use here?
}
