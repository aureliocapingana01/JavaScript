let slides = document.querySelectorAll('.slide-item').length 
let correntSlide = 0

document.querySelector('.slide-width').style.width = `calc(100vw * ${slides})`

document.querySelector('.slide-controls').style.height = `${document.querySelector('.slide').clientHeight}px`

const goPrev = () => {
    correntSlide--
    if (correntSlide < 0) {
        correntSlide = slides - 1 
    }
    updateMargin()
}
const goNext = () => {
    correntSlide++
    if (correntSlide > (slides - 1)) {
        correntSlide = 0 
    }
    updateMargin()
}

const updateMargin = () => {
    let slideItemWidth = document.querySelector('.slide-item').clientWidth
    let newMargin = (correntSlide * slideItemWidth)

    document.querySelector('.slide-width').style.marginLeft = `-${newMargin}px`
}

setInterval(goNext, 1500)