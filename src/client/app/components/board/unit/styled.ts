import styled from 'styled-components'
import colours from '../../../variables/empireColours'

interface PathProps {
  colourId: string,
  shade: 'light' | 'shadow' | 'medium'
}
export const Path = styled.path<PathProps>`
  fill: ${({colourId, shade}) => colours[`${colourId}_${shade}` as keyof typeof colours]}
`

type PolygonProps = PathProps
export const Polygon = styled.polygon<PolygonProps>`
  fill: ${({colourId, shade}) => colours[`${colourId}_${shade}` as keyof typeof colours]}
`