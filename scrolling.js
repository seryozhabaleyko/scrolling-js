const progress = document.getElementById('progress__bar')
const scrollToButton = document.getElementById('top')

window.addEventListener('scroll', () => {
    progressScroll()
    window.scrollY > 150 ? scrollToButton.style.visibility = 'visible' : scrollToButton.style.visibility = 'hidden'
})

scrollToButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
})

function progressScroll() {
    let maxY, percent
    'scrollMaxY' in window ? maxY = window.scrollMaxY : maxY = document.documentElement.scrollHeight - document.documentElement.clientHeight
    percent = window.scrollY / maxY * 100
    progress.setAttribute('style', `width: ${percent}%`)
}