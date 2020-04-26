import ProvinceId from '@shared/types/enums/ProvinceId'

 const getIdFromLocation = (locationName: string): ProvinceId => {
  if (!locationName) return null
  const id = abbreviations[locationName]
  if (!id) console.trace(`NO TILE FOUND WITH NAME ${locationName}`)
  return id
}

export default getIdFromLocation


// ! If editing this object, make sure to edit the one in getLocationFromId as well!
const abbreviations: {[key: string]: ProvinceId} = {
  'North_Atlantic_Ocean': 'nat',
  'Norwegian_Sea': 'nrg',
  'Barents_Sea': 'bar',
  'St_Petersburg__nc': 'stp/nc',
  'St_Petersburg': 'stp',
  'Moscow': 'mos',
  'Sevastopol': 'sev',
  'Armenia': 'arm',
  'Syria': 'syr',
  'Eastern_Mediterranean': 'eas',
  'Ionian_Sea': 'ion',
  'Tunis': 'tun',
  'North_Africa': 'naf',
  'Mid_Atlantic_Ocean': 'mid',
  'Irish_Sea': 'iri',
  'Liverpool': 'lvp',
  'Clyde': 'cly',
  'Edinburgh': 'edi',
  'North_Sea': 'nth',
  'Norway': 'nwy',
  'St_Petersburg__sc': 'stp/sc',
  'Livonia': 'lvn',
  'Warsaw': 'war',
  'Ukraine': 'ukr',
  'Black_Sea': 'bla',
  'Ankara': 'ank',
  'Smyrna': 'smy',
  'Aegean_Sea': 'aeg',
  'Greece': 'gre',
  'Naples': 'nap',
  'Tyrrhenian_Sea': 'tys',
  'Western_Mediterranean': 'wes',
  'Spain__sc': 'spa/sc',
  'Spain': 'spa',
  'Spain__nc': 'spa/nc',
  'Portugal': 'por',
  'Gascony': 'gas',
  'Brest': 'bre',
  'English_Channel': 'eng',
  'Wales': 'wal',
  'Yorkshire': 'yor',
  'Skagerrak': 'ska',
  'Sweden': 'swe',
  'Finland': 'fin',
  'Gulf_of_Bothnia': 'bot',
  'Baltic_Sea': 'bal',
  'Prussia': 'pru',
  'Silesia': 'sil',
  'Galicia': 'gal',
  'Rumania': 'rum',
  'Bulgaria__ec': 'bul/ec',
  'Bulgaria': 'bul',
  'Constantinople': 'con',
  'Bulgaria__sc': 'bul/sc',
  'Serbia': 'ser',
  'Albania': 'alb',
  'Adriatic_Sea': 'adr',
  'Apulia': 'apu',
  'Rome': 'rom',
  'Tuscany': 'tus',
  'Gulf_of_Lyon': 'gol',
  'Marseilles': 'mar',
  'Burgundy': 'bur',
  'Paris': 'par',
  'Picardy': 'pic',
  'London': 'lon',
  'Belgium': 'bel',
  'Holland': 'hol',
  'Helgoland_Bight': 'hel',
  'Denmark': 'den',
  'Berlin': 'ber',
  'Munich': 'mun',
  'Bohemia': 'boh',
  'Vienna': 'vie',
  'Budapest': 'bud',
  'Trieste': 'tri',
  'Venice': 'ven',
  'Piedmont': 'pie',
  'Ruhr': 'ruh',
  'Tyrolia': 'tyr',
  'Kiel': 'kie',
  'Switzerland': 'n/swi',
  'Ireland': 'n/ire',
  'Corsica': 'n/cor',
  'Sardinia': 'n/sar',
  'Mallorca': 'n/mal',
  'Sicily': 'n/sic',
  'Crete': 'n/cre',
}