import styled, { createGlobalStyle } from 'styled-components'

import Colours from './variables/colors'

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${Colours.offwhite};
    margin: 8px 0;
  }

  h1 {
    color: ${Colours.shadow};
    font-size: 84px;
    @media (max-width: 767px) {
      font-size: 44px;
      text-shadow: 3px 3px 0px ${Colours.mid};
    }
    text-shadow: 5px 5px 0px ${Colours.mid};
    text-align: center;
  }

  input,button {
    font-family: 'Arvo', Calibri, sans-serif;
    color: ${Colours.shadow};
    font-size: 18px;
    height: 24px;
    border-radius: 3px;
    background-color: ${Colours.offwhite};
    margin: 10px 0px;
    box-sizing: border-box;
    text-align: center;
  }
`

export const Page = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Notable|Arvo&display=swap');

  animation: fadein 1s;
  display: flex;
  align-items: center;
  align-content: flex-start;
  flex-direction: column;
  font-family: 'Notable', 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

  @keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
`
