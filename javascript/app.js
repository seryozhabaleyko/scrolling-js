import { progressScroll } from './progress.js'

const scrollToButton = document.getElementById('top')

window.addEventListener('scroll', () => {
    const maxLengthScrollY = window.scrollMaxY || document.documentElement.scrollHeight - document.documentElement.clientHeight
    // 'scrollMaxY' in window ? maxLengthScrollY = window.scrollMaxY : maxLengthScrollY = document.documentElement.scrollHeight - document.documentElement.clientHeight
    progressScroll(maxLengthScrollY)
    maxLengthScrollY > 150 ? scrollToButton.style.visibility = 'visible' : scrollToButton.style.visibility = 'hidden'
})

scrollToButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
})
