import { IBoardTerritory } from "@shared/types";
import { Component, Fragment, h } from "preact";
import * as Styled from "./styled";

import SupplyStar from "../supplyStar/supplyStar";
// Move tile type into shared types folder?
export interface ITerritoryProps {
  tile: IBoardTerritory;
  // unit: 'army' | 'fleet' | null
  isSelected: boolean;
  viewBox: string;
  onSelect: () => void;
  colour: string;
}

export default class Territory extends Component<ITerritoryProps> {
  handleClick = (title: string) => () => {
    console.log(title);
  };

  getTileType = (tags: IBoardTerritory["tags"]) => {
    if (tags.includes("sea")) return "sea";
    if (tags.includes("neutral")) return "neutral";
    return "land";
  };

  render(props: ITerritoryProps) {
    const tileType = this.getTileType(props.tile.tags);
    return (
      <Fragment>
        <g title={props.tile.title}>
          <Styled.Path
            tileType={tileType}
            colourId={props.colour}
            d={props.tile.path}
            onClick={props.onSelect}
          />
          {props.tile.textLocation && (
            <Fragment>
              {/* {process.env.NODE_ENV === 'development' && (
                <circle stroke='white' cx={props.tile.textLocation.x} cy={props.tile.textLocation.y} r='1'/>
              )} */}
              <Styled.TerritoryName textLocation={props.tile.textLocation}>
                {props.tile.tags.includes("supply") && <SupplyStar />}
                <Styled.TerritoryTitle>
                  {props.tile.name.split("\n").map((line, i) => (
                    <tspan dy={i ? "8" : "0"} x="0" text-anchor="middle">
                      {line}
                    </tspan>
                  ))}
                </Styled.TerritoryTitle>
              </Styled.TerritoryName>
            </Fragment>
          )}
        </g>
      </Fragment>
    );
  }
}
