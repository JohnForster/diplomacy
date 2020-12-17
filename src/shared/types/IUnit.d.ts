export interface IUnit {
  unitType: "Army" | "Fleet";
  location: string;
  status: string; // 'Active' | 'Retreating' | 'Destroyed' ?
}
