import {animateScroll} from 'react-scroll'

function getOffset (el: HTMLElement) {
  const rect = el.getBoundingClientRect()
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY
  }
}

function scrollToElementById (id:string) {
  const element = document.getElementById(id)
  const offset = getOffset(element)
  animateScroll.scrollTo(190)
}

export default scrollToElementById