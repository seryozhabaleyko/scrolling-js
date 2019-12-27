const progress = document.getElementById("progress__bar")
const scrollMaxY = window.scrollMaxY || document.documentElement.scrollHeight - document.documentElement.clientHeight

export function progressScroll(scrollY) {
    const percent = (scrollY / scrollMaxY) * 100
    progress.setAttribute('style', `width: ${percent}%`)
}
