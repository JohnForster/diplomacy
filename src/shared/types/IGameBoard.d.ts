type Tag =
  | "coastal"
  | "coast"
  | "dual"
  | "landlocked"
  | "passage"
  | "supply"
  | "passage"
  | "neutral"
  | "sea";

export interface IBoardTerritory {
  title: string;
  name: string;
  tileType: string;
  id: string;
  tags: Tag[];
  path: string;
  textLocation?: {
    x: number;
    y: number;
    rotate?: number;
  };
}

export interface IGameBoard {
  mapTitle: string;
  viewBox: string;
  territories: IBoardTerritory[];
}
