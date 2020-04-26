const fs = require('fs')

const svgData = fs.readFileSync('tools/svgData').toString()

const svgDataArray = svgData.split(/(?=<g )/g)

const convertedArray = svgDataArray.map(group => {
  return group
    .replace(/<g title="(.+)" class="(.+)">>?/, "{ title: '$1', tileType:'$2',")
    .replace(/<\/g>/, '},')
    .replace(/<poly(?:gon|line) class="(.+)" points="([\d,\s]*)"\/>/, "id: '$1', path: `$2`,")
    .replace(/<!--(.*)\s-->/, '// $1')
    .replace(/<use .+\/>/,'')
    .replace(/<text x="(\d+)" y="(\d+)">(.*)<\/text>/, 'textLocation: { x: "$1", y: "$2", },')
    .replace(/[\s]/, ' ')
    .replace(/\n\s*\n/, '\n')
})

fs.writeFileSync('tools/territoryObject.js', '[\n' + convertedArray.join('\n') + '\n]')

{/* <g title="Switzerland" class="landTile">>
	<polygon class="s" points="209,363 208,367 194,382 197,385 203,379 207,386 213,387 221,385 227,390 229,385 243,388 245,384 241,378 234,374 234,366 232,363 225,362 222,365"/>
	<text x="215" y="378"></text>
</g> */}

console.log(convertedArray[9])
// svgData.replace(/<g title="(\w+)" class="(\w+)">.+<polygon class="(\w) (\w+)" points="(.+)"\/>.+<text x="(.+)" x="(.+)">(\w+)</gs,'')

/*
<g title="Berlin" class="landTile">
	<polygon class="l Berlin" points="294,275 286,274 287,267 280,266 266,275 266,283 262,287 264,293 261,296 263,310 288,305 296,300 297,296 292,290"/>
	<text x="272" y="292">Berlin</text>
	<use href="#SC" transform="translate(&scBerlin;)"/>
</g>
*/

/*
    {
      title: 'Prussia',
      id: 'Prussia',
      tileType: 'landTile',
      path: '347,243 347,248 348,254 344,262 337,264 334,273 328,274 326,265 314,266 307,273 294,275 292,290 297,296 296,300 320,303 324,299 326,292 341,287 345,289 359,286 365,281 367,265 362,260 356,261 354,251',
      textLocation: {
        x: '320',
        y: '283',
      }
    },
*/