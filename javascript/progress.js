const progress = document.getElementById("progress__bar")

export function progressScroll(scrollMaxY) {
    const supportPageOffset = window.pageYOffset !== undefined
    const isCSS1Compat = ((document.compatMode || "") === "CSS1Compat")
    const currentScrollY = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop
    const percent = (currentScrollY / scrollMaxY) * 100
    // progress.style.width = `${percent}%`
    progress.setAttribute('style', `width: ${percent}%`)
}
