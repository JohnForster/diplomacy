import styled from 'styled-components'

export const OrderBox = styled.div`
  @media screen and (max-width:500px){
    font-size: 9px;
  }

  font-size: xx-large;
  width: 13%;
  font-family: monospace;
  border: 1px solid black;
  border-radius: 5px;
  text-align: center;
  background: rgba(255,255,255, .4); /* Move to constants */
  padding: 5px;
  pointer-events: all;
  @media screen and (max-width:767px) and (orientation:landscape) {
    max-width: 100%;
  }
`

export const OrderTitle = styled.span`
  font-weight: bold;
`