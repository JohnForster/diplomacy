import {h, render, Component} from 'preact'
import App from './app/app'

// https://dominicstpierre.com/how-to-start-with-typescript-and-preact-a9ea3e0ba4dc
render(<App message="hello emperors" /> , document.getElementById('root'))

// window.addEventListener('load', function() {
//   const svgObject = document.getElementById('mainMap') as HTMLObjectElement
//   const svg = svgObject.contentDocument.getElementById('mapSvg')
//   Engine.setup(svg)
//   Engine.run()
// })
