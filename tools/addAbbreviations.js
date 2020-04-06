const fs = require('fs')

const abbreviationData = require('./abbreviations')

const countryData = require('./countryData')

countryData.territories.forEach((t, i) => {
  if (t.id === 's') return
  const abr = abbreviationData[t.title]
  if (!abr) throw new Error(`Expected ${t.title}`)
  t.abbreviation = abr
})

Object.entries(abbreviationData).forEach(([id, abr]) => {
  const country = countryData.territories.find(t => t.abbreviation === abr)
  if (!country) throw new Error (`No country found for ${abr}`)
})

fs.writeFile('./tools/newCountryData.ts', JSON.stringify(countryData, null, 2), () => {})
console.log('Complete!')
// {
//   title: 'Adriatic_Sea',
//   name: 'Adriatic Sea',
//   tileType: 'seaTile',
//   id: 'w',
//   path: `M 322 480 L 297 456 L 300 453 L 290 453 L 278 443 L 272 424 L 260 417 L 261 401 L 270 398 L 276 399 L 275 403 L 278 410 L 282 401 L 286 402 L 289 418 L 306 436 L 331 454 L 331 477 L 335 480 L 322 480`,
//   textLocation: {
//     x: 300,
//     y: 435,
//     rotate: 48,
//   },
// },