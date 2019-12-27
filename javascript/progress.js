const progress = document.getElementById("progress__bar")

export function progressScroll(scrollY) {
    const scrollMaxY = window.scrollMaxY || document.documentElement.scrollHeight - document.documentElement.clientHeight
    const percent = (scrollY / scrollMaxY) * 100
    progress.setAttribute('style', `width: ${percent}%`)
}
