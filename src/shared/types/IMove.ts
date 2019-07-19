export interface IMove {
  unit: 'Army' | 'Fleet',
  moveType: string,
  from: string,
  to: string,
  supportFrom: string,
  wasSuccessful: boolean,
}
