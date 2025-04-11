const dotsContainer = document.querySelector('.dots');

const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.slider__btn--left');
const nextBtn = document.querySelector('.slider__btn--right');




export function addHandlerPrevSlide(handler) {
    prevBtn.addEventListener('click', handler)
}


export function addHandlerNextSlide(handler) {
    nextBtn.addEventListener('click', handler)
}


export function addHandlerDots(handler) {
    dotsContainer.addEventListener('click', (e) => {
        if (!e.target.classList.contains('dots__dot')) return
        const dotNumber = +e.target.dataset.slide

        handler(dotNumber)
    })
}


export function goToSlides(slideNumber) {
    slides.forEach((slide , i) =>
        slide.style.transform = `translateX(${100 * (i - slideNumber)}%)`)
}


export function createDots() {
    slides.forEach((_, i) =>  {
        dotsContainer.insertAdjacentHTML("beforeend",
            `<button class="dots__dot" data-slide="${i}"></button>`
        )
    })
}


export function setActiveDot(curSlide) {
    document.querySelectorAll('.dots__dot')
        .forEach(dot => dot.classList.remove('dots__dot--active'))
    document.querySelector(`.dots__dot[data-slide="${curSlide}"]`)
        .classList.add('dots__dot--active')
}


export function getAllSlides() {
    return slides
}