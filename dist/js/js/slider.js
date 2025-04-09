
const dotContainer = document.querySelector(".dots");
const slides = document.querySelectorAll(".slide");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");

const maxSlide = slides.length;
let currSlide = 0;


const createDots = function() {
    slides.forEach((_, i) => {
        dotContainer.insertAdjacentHTML("beforeend", `
    <button class="dots__dot" data-slide="${i}"></button>
    `);
    });
};


const activateDot = function(slide) {
    document.querySelectorAll(".dots__dot").forEach(dot =>
        dot.classList.remove("dots__dot--active"));
    document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add("dots__dot--active");
};


const goToSlide = function(slide) {
    slides.forEach((s, i) =>
        s.style.transform = `translateX(${100 * (i - slide)}%)`);
};


const nextSlide = function() {
    currSlide === maxSlide -1 ? currSlide = 0 : currSlide++;
    goToSlide(currSlide);
    activateDot(currSlide);
};


const prevSlide = function() {
    currSlide === 0 ? currSlide = maxSlide -1 : currSlide--;
    goToSlide(currSlide);
    activateDot(currSlide);
};


createDots();
goToSlide(0);
activateDot(0);


btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);

document.addEventListener("keydown", (e) => {
    e.key === "ArrowLeft" && prevSlide();
    e.key === "ArrowRight" && nextSlide();
});

dotContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("dots__dot")){
        currSlide = Number(e.target.dataset.slide);
        goToSlide(currSlide);
        activateDot(currSlide);
    }
});