import * as sliderView from './view.js'
import * as sliderModel from './model.js'



function controlPrevSlide() {
    sliderModel.prevSlide()
    sliderView.goToSlides(sliderModel.state.currentSlide)
    sliderView.setActiveDot(sliderModel.state.currentSlide);
}


function controlNextSlide() {
    sliderModel.nextSlide()
    sliderView.goToSlides(sliderModel.state.currentSlide)
    sliderView.setActiveDot(sliderModel.state.currentSlide);
}


function controlDots(dotNumber) {
    sliderModel.state.currentSlide = dotNumber

    sliderView.goToSlides(dotNumber)
    sliderView.setActiveDot(sliderModel.state.currentSlide);
}



export function initSlides() {
    const slides = sliderView.getAllSlides()

    sliderModel.initSliders(slides)
    sliderView.goToSlides(sliderModel.state.currentSlide)
    sliderView.createDots();
    sliderView.setActiveDot(sliderModel.state.currentSlide);

    sliderView.addHandlerPrevSlide(controlPrevSlide)
    sliderView.addHandlerNextSlide(controlNextSlide)
    sliderView.addHandlerDots(controlDots)
}
