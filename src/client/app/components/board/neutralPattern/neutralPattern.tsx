import {h} from 'preact'

export default ({stripe}: {stripe: number}) => (
  <pattern id='diagonalHatch' patternUnits='userSpaceOnUse' width={stripe} height={stripe} patternTransform='rotate(45)'>
    <line x1={stripe/2} y='0' x2={stripe/2} y2={stripe} stroke='black' stroke-width={stripe} />
    <line x1='0' y='0' x2='0' y2={stripe} stroke='maroon' stroke-width={stripe} />
  </pattern>
)