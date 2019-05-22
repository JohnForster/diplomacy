const startingTerritories: {[key: string]: string[]} = {
  England: ['London', 'Liverpool', 'Yorkshire', 'Clyde', 'Edinburgh', 'Wales'],
  France: ['Picardy', 'Brest', 'Paris', 'Gascony', 'Burgundy', 'Marseilles'],
  Italy: ['Piedmont', 'Venice', 'Rome', 'Naples', 'Apulia', 'Tuscany'],
  Germany: ['Berlin', 'Ruhr', 'Munich', 'Kiel', 'Silesia', 'Prussia'],
  Austria: ['Bohemia', 'Budapest', 'Tyrolia', 'Galicia', 'Vienna', 'Trieste'],
  Russia: ['Warsaw', 'Livonia', 'Sevastopol', 'Moscow', 'Ukraine', 'St_Petersburg'],
  Turkey: ['Constantinople', 'Smyrna', 'Syria', 'Ankara', 'Armenia'],
}

const startingUnits: {[key: string]: {unitType: string, location: string, status: string}[]} = {
  England: [
    {unitType: 'Fleet', location: 'London', status: 'Active'},
    {unitType: 'Fleet', location: 'Edinburgh', status: 'Active'},
    {unitType: 'Army', location: 'Liverpool', status: 'Active'},
  ],
  France: [
    {unitType: 'Army', location: 'Paris', status: 'Active'},
    {unitType: 'Army', location: 'Marseilles', status: 'Active'},
    {unitType: 'Fleet', location: 'Brest', status: 'Active'},
  ],
  Italy: [
    {unitType: 'Army', location: 'Rome', status: 'Active'},
    {unitType: 'Army', location: 'Venice', status: 'Active'},
    {unitType: 'Fleet', location: 'Naples', status: 'Active'},
  ],
  Germany: [
    {unitType: 'Army', location: 'Berlin', status: 'Active'},
    {unitType: 'Army', location: 'Munich', status: 'Active'},
    {unitType: 'Fleet', location: 'Kiel', status: 'Active'},
  ],
  Austria: [
    {unitType: 'Army', location: 'Vienna', status: 'Active'},
    {unitType: 'Army', location: 'Budapest', status: 'Active'},
    {unitType: 'Fleet', location: 'Trieste', status: 'Active'},
  ],
  Russia: [
    {unitType: 'Army', location: 'Moscow', status: 'Active'},
    {unitType: 'Army', location: 'Warsaw', status: 'Active'},
    {unitType: 'Fleet', location: 'Sevastopol', status: 'Active'},
    // {unitType: 'Fleet', location: 'St_Petersburg__sc', status: 'Active'}, // Leaving for now
  ],
  Turkey: [
    {unitType: 'Army', location: 'Constantinople', status: 'Active'},
    {unitType: 'Army', location: 'Smyrna', status: 'Active'},
    {unitType: 'Fleet', location: 'Ankara', status: 'Active'},
  ],
}

const defaultColours: {[key: string]: string} = {
  Austria: '#FF77FF',
  England: '#0000FF',
  France: '#00FFFF',
  Germany: '#808080',
  Italy: '#00FF00',
  Russia: '#FFFF00',
  Turkey: '#FF0000',
}

export {
  startingTerritories,
  startingUnits,
  defaultColours,
}
