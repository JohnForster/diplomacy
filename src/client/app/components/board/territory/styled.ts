import styled, { css } from "styled-components";
import empireColours from "../../../variables/empireColours";
import { IBoardTerritory } from "@shared/types";

const landCss = css`
  fill: #ffffdd;
  fill-opacity: 0.3;
  :hover {
    fill-opacity: 0.4;
  }
`;
const seaCss = css`
  fill: #99ccff;
  fill-opacity: 0.45;
  :hover {
    fill: #aaddff;
  }
`;
const neutralCss = css`
  fill: url(#diagonalHatch);
  stroke: #220;
  opacity: 0.5;
`;

const tileTypesCss = {
  sea: seaCss,
  land: landCss,
  neutral: neutralCss,
};

const getLight = (id: string) => {
  const key = `${id}_light` as keyof typeof empireColours;
  const colourHex = empireColours[key];
  return colourHex || "none";
};

interface IPathProps {
  tileType: "sea" | "land" | "neutral";
  colourId: string;
}
export const Path = styled.path`
  pointer-events: all;
  stroke: #444444;
  stroke-linejoin: round;
  stroke-width: 0.5;
  transition: fill-opacity 0.2s;
  ${(p: IPathProps) => tileTypesCss[p.tileType]};
  ${(p: IPathProps) =>
    p.colourId
      ? css`
          fill: ${getLight(p.colourId)};
        `
      : ""}
`;

type TextLocation = IBoardTerritory["textLocation"];
const getTranslate = (textLocation: TextLocation) => {
  const { x, y } = textLocation;
  return `${x}px, ${y}px`;
};
const getRotate = (rotate: TextLocation["rotate"]) => {
  const rotation = rotate || "0";
  return `${rotation}deg`;
};
interface INameProps {
  textLocation: TextLocation;
}
export const TerritoryName = styled.g<INameProps>`
  transform: translate(${(p) => getTranslate(p.textLocation)})
    rotate(${(p) => getRotate(p.textLocation.rotate)});
`;

export const TerritoryTitle = styled.text`
  font-family: Palatino;
  fill: #222;
  font-size: 9px;
  transform: translate(0, 8px);
  pointer-events: none;
`;
