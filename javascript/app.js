import { progressScroll } from './progress.js'

const scrollToButton = document.getElementById('top')

window.addEventListener('scroll', () => {
    progressScroll()
    // window.pageYOffset
    window.scrollY > 150 ? scrollToButton.style.visibility = 'visible' : scrollToButton.style.visibility = 'hidden'
})

scrollToButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
})
