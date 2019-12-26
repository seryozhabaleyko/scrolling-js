const progress = document.getElementById('progress__bar')

export function progressScroll() {
    let maxY, percent
    'scrollMaxY' in window ? maxY = window.scrollMaxY : maxY = document.documentElement.scrollHeight - document.documentElement.clientHeight
    percent = window.scrollY / maxY * 100
    progress.setAttribute('style', `width: ${percent}%`)
}