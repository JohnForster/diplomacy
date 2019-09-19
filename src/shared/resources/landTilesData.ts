const adjacentByLandTilesData: {[key: string]: string[]} = {
  Adriatic_Sea: ['Ionian_Sea', 'Albania', 'Apulia', 'Trieste', 'Venice'],
  Aegean_Sea: ['Eastern_Mediterranean', 'Ionian_Sea', 'Bulgaria__sc', 'Constantinople', 'Greece', 'Smyrna'],
  Baltic_Sea: ['Gulf_of_Bothnia', 'Skagerrak', 'Berlin', 'Denmark', 'Kiel', 'Livonia', 'Prussia', 'Sweden'],
  Barents_Sea: ['Norwegian_Sea', 'Norway', 'St_Petersburg__nc'],
  Black_Sea: ['Ankara', 'Armenia', 'Constantinople', 'Rumania', 'Sevastopol'],
  Eastern_Mediterranean: ['Aegean_Sea', 'Ionian_Sea', 'Smyrna', 'Syria'],
  English_Channel: ['Irish_Sea', 'Mid_Atlantic_Ocean', 'North_Sea', 'Belgium', 'Brest', 'London', 'Picardy', 'Wales'],
  Gulf_of_Lyon: ['Tyrrhenian_Sea', 'Western_Mediterranean', 'Marseilles', 'Piedmont', 'Spain__sc', 'Tuscany'],
  Gulf_of_Bothnia: ['Baltic_Sea', 'Finland', 'Livonia', 'St_Petersburg__sc', 'Sweden'],
  Helgoland_Bight: ['North_Sea', 'Denmark', 'Holland', 'Kiel'],
  Ionian_Sea: ['Adriatic_Sea', 'Aegean_Sea', 'Eastern_Mediterranean', 'Tyrrhenian_Sea', 'Albania', 'Apulia', 'Greece', 'Naples', 'Tunis'],
  Irish_Sea: ['English_Channel', 'Mid_Atlantic_Ocean', 'North_Atlantic_Ocean', 'Liverpool', 'Wales'],
  Mid_Atlantic_Ocean: ['English_Channel', 'Irish_Sea', 'North_Atlantic_Ocean', 'Western_Mediterranean', 'Brest', 'Gascony', 'North_Africa', 'Portugal', 'Spain__nc', 'Spain__sc'],
  North_Atlantic_Ocean: ['Irish_Sea', 'Mid_Atlantic_Ocean', 'Norwegian_Sea', 'Clyde', 'Liverpool'],
  North_Sea: ['English_Channel', 'Helgoland_Bight', 'Norwegian_Sea', 'Skagerrak', 'Belgium', 'Denmark', 'Edinburgh', 'Holland', 'London', 'Norway', 'Yorkshire'],
  Norwegian_Sea: ['Barents_Sea', 'North_Atlantic_Ocean', 'North_Sea', 'Clyde', 'Edinburgh', 'Norway'],
  Skagerrak: ['Baltic_Sea', 'North_Sea', 'Denmark', 'Norway', 'Sweden'],
  Tyrrhenian_Sea: ['Gulf_of_Lyon', 'Ionian_Sea', 'Naples', 'Rome', 'Tunis', 'Tuscany', 'Western_Mediterranean'],
  Western_Mediterranean: ['Gulf_of_Lyon', 'Mid_Atlantic_Ocean', 'North_Africa', 'Spain__sc', 'Tunis', 'Tyrrhenian_Sea'],
  Switzerland: [],
  Ireland: [],
  Corsica: [],
  Sardinia: [],
  Mallorca: [],
  Sicily: [],
  Crete: [],
  Albania: ['Adriatic_Sea', 'Ionian_Sea', 'Greece', 'Serbia', 'Trieste'],
  Ankara: ['Black_Sea', 'Armenia', 'Constantinople', 'Smyrna'],
  Apulia: ['Adriatic_Sea', 'Ionian_Sea', 'Naples', 'Rome', 'Venice'],
  Armenia: ['Black_Sea', 'Ankara', 'Sevastopol', 'Smyrna', 'Syria'],
  Belgium: ['English_Channel', 'North_Sea', 'Burgundy', 'Holland', 'Picardy', 'Ruhr'],
  Berlin: ['Baltic_Sea', 'Kiel', 'Munich', 'Prussia', 'Silesia'],
  Bohemia: ['Galicia', 'Munich', 'Silesia', 'Tyrolia', 'Vienna'],
  Brest: ['English_Channel', 'Mid_Atlantic_Ocean', 'Gascony', 'Paris', 'Picardy'],
  Budapest: ['Galicia', 'Rumania', 'Serbia', 'Trieste', 'Vienna'],
  Bulgaria__sc: ['Aegean_Sea', 'Constantinople', 'Greece', 'Serbia'],
  Burgundy: ['Belgium', 'Gascony', 'Marseilles', 'Munich', 'Paris', 'Picardy', 'Ruhr'],
  Clyde: ['North_Atlantic_Ocean', 'Norwegian_Sea', 'Edinburgh', 'Liverpool'],
  Constantinople: ['Aegean_Sea', 'Black_Sea', 'Ankara', 'Bulgaria__sc', 'Smyrna'],
  Denmark: ['Baltic_Sea', 'Helgoland_Bight', 'North_Sea', 'Skagerrak', 'Kiel', 'Sweden'],
  Edinburgh: ['North_Sea', 'Norwegian_Sea', 'Clyde', 'Liverpool', 'Yorkshire'],
  Finland: ['Gulf_of_Bothnia', 'Norway', 'St_Petersburg__nc', 'St_Petersburg__sc', 'Sweden'],
  Galicia: ['Bohemia', 'Budapest', 'Rumania', 'Silesia', 'Ukraine', 'Vienna', 'Warsaw'],
  Gascony: ['Mid_Atlantic_Ocean', 'Brest', 'Burgundy', 'Marseilles', 'Paris', 'Spain__nc', 'Spain__sc'],
  Greece: ['Aegean_Sea', 'Ionian_Sea', 'Albania', 'Bulgaria__sc', 'Serbia'],
  Holland: ['Helgoland_Bight', 'North_Sea', 'Belgium', 'Kiel', 'Ruhr'],
  Kiel: ['Baltic_Sea', 'Helgoland_Bight', 'Berlin', 'Denmark', 'Holland', 'Munich', 'Ruhr'],
  Liverpool: ['Irish_Sea', 'North_Atlantic_Ocean', 'Clyde', 'Edinburgh', 'Wales', 'Yorkshire'],
  Livonia: ['Baltic_Sea', 'Gulf_of_Bothnia', 'Moscow', 'Prussia', 'St_Petersburg__sc', 'Warsaw'],
  London: ['English_Channel', 'North_Sea', 'Wales', 'Yorkshire'],
  Marseilles: ['Gulf_of_Lyon', 'Burgundy', 'Gascony', 'Piedmont', 'Spain__sc'],
  Moscow: ['Livonia', 'Sevastopol', 'St_Petersburg__nc', 'St_Petersburg__sc', 'Ukraine', 'Warsaw'],
  Munich: ['Berlin', 'Bohemia', 'Burgundy', 'Kiel', 'Ruhr', 'Silesia', 'Tyrolia'],
  Naples: ['Ionian_Sea', 'Tyrrhenian_Sea', 'Apulia', 'Rome'],
  North_Africa: ['Mid_Atlantic_Ocean', 'Western_Mediterranean', 'Tunis'],
  Norway: ['Barents_Sea', 'North_Sea', 'Norwegian_Sea', 'Skagerrak', 'Finland', 'Sweden'],
  Paris: ['Brest', 'Burgundy', 'Gascony', 'Picardy'],
  Picardy: ['English_Channel', 'Belgium', 'Brest', 'Burgundy', 'Paris'],
  Piedmont: ['Gulf_of_Lyon', 'Marseilles', 'Tuscany', 'Tyrolia', 'Venice'],
  Portugal: ['Mid_Atlantic_Ocean', 'Spain__nc', 'Spain__sc'],
  Prussia: ['Baltic_Sea', 'Berlin', 'Livonia', 'Silesia', 'Warsaw'],
  Rome: ['Tyrrhenian_Sea', 'Apulia', 'Naples', 'Tuscany', 'Venice'],
  Ruhr: ['Belgium', 'Burgundy', 'Holland', 'Kiel', 'Munich'],
  Rumania: ['Black_Sea', 'Budapest', 'Galicia', 'Serbia', 'Sevastopol', 'Ukraine'],
  Serbia: ['Albania', 'Budapest', 'Bulgaria__sc', 'Greece', 'Rumania', 'Trieste'],
  Sevastopol: ['Black_Sea', 'Armenia', 'Moscow', 'Rumania', 'Ukraine'],
  Silesia: ['Berlin', 'Bohemia', 'Galicia', 'Munich', 'Prussia', 'Warsaw'],
  Smyrna: ['Aegean_Sea', 'Eastern_Mediterranean', 'Ankara', 'Armenia', 'Constantinople', 'Syria'],
  Spain__nc: ['Mid_Atlantic_Ocean', 'Gascony', 'Portugal', 'Spain__sc'],
  Spain__sc: ['Gulf_of_Lyon', 'Mid_Atlantic_Ocean', 'Western_Mediterranean', 'Gascony', 'Marseilles', 'Portugal', 'Spain__nc'],
  St_Petersburg__nc: ['Barents_Sea', 'Finland', 'Moscow', 'St_Petersburg__sc'],
  St_Petersburg__sc: ['Gulf_of_Bothnia', 'Finland', 'Livonia', 'Moscow', 'St_Petersburg__nc'],
  Sweden: ['Baltic_Sea', 'Gulf_of_Bothnia', 'Skagerrak', 'Denmark', 'Finland', 'Norway'],
  Syria: ['Eastern_Mediterranean', 'Armenia', 'Smyrna'],
  Trieste: ['Adriatic_Sea', 'Albania', 'Budapest', 'Serbia', 'Tyrolia', 'Venice', 'Vienna'],
  Tunis: ['Ionian_Sea', 'Tyrrhenian_Sea', 'Western_Mediterranean', 'North_Africa'],
  Tuscany: ['Gulf_of_Lyon', 'Tyrrhenian_Sea', 'Piedmont', 'Rome', 'Venice'],
  Tyrolia: ['Bohemia', 'Munich', 'Piedmont', 'Trieste', 'Venice', 'Vienna'],
  Ukraine: ['Galicia', 'Moscow', 'Rumania', 'Sevastopol', 'Warsaw'],
  Venice: ['Adriatic_Sea', 'Apulia', 'Piedmont', 'Rome', 'Trieste', 'Tuscany', 'Tyrolia'],
  Vienna: ['Bohemia', 'Budapest', 'Galicia', 'Trieste', 'Tyrolia'],
  Wales: ['English_Channel', 'Irish_Sea', 'Liverpool', 'London', 'Yorkshire'],
  Warsaw: ['Galicia', 'Livonia', 'Moscow', 'Prussia', 'Silesia', 'Ukraine'],
  Yorkshire: ['North_Sea', 'Edinburgh', 'Liverpool', 'London', 'Wales'],
}

export default adjacentByLandTilesData