import {FunctionalComponent, h} from 'preact'
import * as Styled from './styled'

const StarPath = Styled.StarPath

const SupplyStar: FunctionalComponent = () => {
  return (
    <StarPath d='
      M 0.000 3.000
      L 3.527 4.854
      L 2.853 0.927
      L 5.706 -1.854
      L 1.763 -2.427
      L 0.000 -6.000
      L -1.763 -2.427
      L -5.706 -1.854
      L -2.853 0.927
      L -3.527 4.854
      L 0.000 3.000
    '/>
  )
}

export default SupplyStar