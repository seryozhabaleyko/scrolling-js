import { progressScroll } from './progress.js'
import { buttonScrollTo, topScroll } from './scrollTo.js'

window.addEventListener('scroll', () => {
    const supportPageOffset = window.pageYOffset !== undefined
    const isCSS1Compat = ((document.compatMode || "") === "CSS1Compat")
    const scrollY = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop
    progressScroll(scrollY)
    topScroll(scrollY)
})

buttonScrollTo.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
})
