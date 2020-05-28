import styled, { css } from 'styled-components'

export const OrderBox = styled.div`
  @media screen and (max-width:500px){
    font-size: 9px;
  }

  font-size: large;
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

const ButtonCss = css`
  font-size: initial;
  margin: 0;
  width: 80%;
  :focus {
    outline: none;
  }
`

interface OrderButtonProps {
  selected: boolean
}
export const OrderButton = styled.button<OrderButtonProps>`
  ${ButtonCss}
  ${({selected}) => selected && `
    background-color: lightgreen;
  `}
`

export const CancelButton = styled.button`
  ${ButtonCss}
  background-color: lightcoral;
  border-color: maroon;
  color: black;
`