export const state = {
    currentSlide: 0,
    maxSlides: 0,
}


export function initSliders(slides) {
    state.maxSlides = slides.length
}


export function prevSlide() {
    state.currentSlide = state.currentSlide === 0 ? state.maxSlides - 1 : state.currentSlide - 1;
}


export function nextSlide() {
    state.currentSlide = state.currentSlide === state.maxSlides - 1 ? 0 : state.currentSlide + 1;
}