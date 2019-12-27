export const buttonScrollTo = document.getElementById('top')

export function topScroll(scrollY) {
    scrollY > 150 ? buttonScrollTo.style.visibility = 'visible' : buttonScrollTo.style.visibility = 'hidden'
}
