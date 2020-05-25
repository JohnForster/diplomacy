import styled from 'styled-components';

import Colours from '../../variables/colors'

export const GameBoard = styled.div`
  position: relative;
  width: 100%;
  max-width: 100vh;
  @media screen and (max-width:767px) and (orientation:landscape) {
    max-width: 80%;
  }
`

export const StickyContainer = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  height: 100px;
  z-index: 5;
  pointer-events: none;
`

const PAPER_TEXTURE_URL = '/assets/paperTexture.jpg'
export const MapSvg = styled.svg`
  background-image: url(${PAPER_TEXTURE_URL});
  background-size: contain;

  width: 100%;
  pointer-events: none;
  transform: translateY(-100px);

  border: 2px solid ${Colours.shadow};
  border-radius: 4px;
`