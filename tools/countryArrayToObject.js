const fs = require('fs')

const countryData = require('./newCountryData')
const landTileData = require('./landTilesData')
const seaTileData = require('./seaTilesData')
const abbreviations = require('./abbreviations')

const newCountryData = {}

newCountryData.mapTitle = countryData.mapTitle
newCountryData.viewBox = countryData.viewBox
newCountryData.territories = {}
countryData.territories.forEach((t) => {
  const {name, title, tileType, id, path, textLocation, abbreviation} = t
  const adjacentByLand = landTileData[title] || []
  if (adjacentByLand.length === 0) console.log(`No land tile data found for ${abbreviation}`)
  const adjacentBySea = seaTileData[title] || []
  if (adjacentBySea.length === 0) console.log(`No sea tile data found for ${abbreviation}`)
  newCountryData.territories[abbreviation] = {
    name,
    tileType,
    id,
    path,
    textLocation,
    adjacentByLand: adjacentByLand.map(t => abbreviations[t]),
    adjacentBySea: adjacentBySea.map(t => abbreviations[t]),
  }
})

fs.writeFile('./tools/adjustedCountryData.json', JSON.stringify(newCountryData, null, 2), () => {})