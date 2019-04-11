window.addEventListener('load', function () {
  const svgObject = document.getElementById('mainMap') as HTMLObjectElement
  const svg = svgObject.contentDocument.getElementById('mapSvg')

  const water = Array.from(svg.getElementsByClassName('seaTile') as HTMLCollectionOf<HTMLElement>)
  water.forEach((seaTile) => {
    seaTile.onclick = () => console.log(seaTile.getAttribute('title'))
  })
  // const svg = svgObject.getElementById('mapSvg')
})
