import { h } from 'preact'

import * as Styled from './styled'

const FormBox: React.FC = ({children}) => (
  <Styled.FormBox>
    {children}
  </Styled.FormBox>
)

export default FormBox