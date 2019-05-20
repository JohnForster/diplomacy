const startingTerritories: {[key: string]: string[]} = {
  England: ['London', 'Liverpool', 'Yorkshire', 'Clyde', 'Edinburgh', 'Wales'],
  France: ['Picardy', 'Brest', 'Paris', 'Gascony', 'Burgundy', 'Marseilles'],
  Italy: ['Piedmont', 'Venice', 'Rome', 'Naples', 'Apulia', 'Tuscany'],
  Germany: ['Berlin', 'Ruhr', 'Munich', 'Kiel', 'Silesia', 'Prussia'],
  Austria: ['Bohemia', 'Budapest', 'Tyrolia', 'Galicia', 'Vienna', 'Trieste'],
  Russia: ['Portugal', 'Livonia', 'Sevastopol', 'Moscow', 'Ukraine', 'Finland', 'St_Petersburg'],
  Turkey: ['Constantinople', 'Smyrna', 'Syria', 'Ankara', 'Armenia'],
}

const startingUnits: {[key: string]: {type: string, location: string, status: string}[]} = {
  England: [
    {type: 'Fleet', location: 'London', status: 'Active'},
    {type: 'Fleet', location: 'Edinburgh', status: 'Active'},
    {type: 'Army', location: 'Liverpool', status: 'Active'},
  ],
  France: [
    {type: 'Army', location: 'Paris', status: 'Active'},
    {type: 'Army', location: 'Marseilles', status: 'Active'},
    {type: 'Fleet', location: 'Brest', status: 'Active'},
  ],
  Italy: [
    {type: 'Army', location: 'Rome', status: 'Active'},
    {type: 'Army', location: 'Venice', status: 'Active'},
    {type: 'Fleet', location: 'Naples', status: 'Active'},
  ],
  Germany: [
    {type: 'Army', location: 'Berlin', status: 'Active'},
    {type: 'Army', location: 'Munich', status: 'Active'},
    {type: 'Fleet', location: 'Kiel', status: 'Active'},
  ],
  Austria: [
    {type: 'Army', location: 'Vienna', status: 'Active'},
    {type: 'Army', location: 'Budapest', status: 'Active'},
    {type: 'Fleet', location: 'Trieste', status: 'Active'},
  ],
  Russia: [
    {type: 'Army', location: 'Moscow', status: 'Active'},
    {type: 'Army', location: 'Warsaw', status: 'Active'},
    {type: 'Fleet', location: 'Sevastopol', status: 'Active'},
    // {type: 'Fleet', location: 'St_Petersburg__sc', status: 'Active'}, // Leaving for now
  ],
  Turkey: [
    {type: 'Army', location: 'Constantinople', status: 'Active'},
    {type: 'Army', location: 'Smyrna', status: 'Active'},
    {type: 'Fleet', location: 'Ankara', status: 'Active'},
  ],
}

export {
  startingTerritories,
  startingUnits,
}
