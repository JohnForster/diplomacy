import Engine from './engine/engine'

window.addEventListener('load', function () {
  const svgObject = document.getElementById('mainMap') as HTMLObjectElement
  const svg = svgObject.contentDocument.getElementById('mapSvg')
  Engine.setup(svg)
  Engine.run()
})
