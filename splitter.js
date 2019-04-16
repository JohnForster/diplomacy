const tiles = require('./tiles')
const fs = require('fs')

const arrayOfGroups = tiles.split('</g>')
const allRegions = {}

// const tile = tilesAsArray[0]
let i = 0
arrayOfGroups.forEach((tile) => {
  const matchResponse = tile.match(/(?<=title=")(\w+)"/)
  if (matchResponse) {
    const regionName = matchResponse[1]
    // console.log(matchResponse[1])
    const points = tile.match(/class="[wl][\s\w]*" points="([\d,\s]+)+"/)
    let pointsAsArray
    if (points) pointsAsArray = points[1].split(' ')
    allRegions[regionName] = {
      points: pointsAsArray || [],
      borders: []
    }
    i++
  }
})

const output = {}
// Loop through the regions
for (let region1 in allRegions) {
  if (allRegions.hasOwnProperty(region1)) { // Guard condition
    output[region1] = []
    // Loop through the regions again
    for (let region2 in allRegions) {
      if (allRegions.hasOwnProperty(region2)) {
        // Skip if the region is the same
        if (region1 === region2) continue
        // Check if any of the points of region 1 are included in the points of region 2
        if (allRegions[region1].points.some(point => allRegions[region2].points.includes(point))) {
          output[region1].push(region2)
        }
      }
    }
  }
}
fs.writeFile('tilesData.json', JSON.stringify(output), (err) => {
  if (err) throw err
  console.log(Object.keys(output).length + ' regions found')
  console.log("The file has been saved at " + new Date().toLocaleTimeString())
})
// console.log(i)
