import Engine from './engine/prototype'

window.addEventListener('load', function() {
  const svgObject = document.getElementById('mainMap') as HTMLObjectElement
  const svg = svgObject.contentDocument.getElementById('mapSvg')
  Engine.setup(svg)
  Engine.run()
})
