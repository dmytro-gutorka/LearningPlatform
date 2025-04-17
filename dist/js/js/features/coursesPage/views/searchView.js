const coursesContainer = document.querySelector('.courses__cards');
const numbersOfCoursesElement = document.querySelector('.courses__result');


export function addSearchHandler(handler) {
    window.addEventListener('DOMContentLoaded',  handler);
}


export function renderCourses(data, parentElement) {
    const markup = data.map(course => generateCourseMarkup(course)).join('')

    coursesContainer.innerHTML = '';
    coursesContainer.insertAdjacentHTML('afterbegin', markup)
}


function generateCourseMarkup(course) {
    return `
        <article class="courses__card" data-id="${course.id}">
            <img class="courses__card-image" src="${course.image}" alt="" width="300" height="300">
                <div class="courses__card-body">
                    <h3 class="courses__card-title">${course.title}</h3>
                    <p class="courses__card-id" ></p>
                    <p class="courses__card-description"><span class="bold-underline">Description</span>: ${course.description}</p>
                    <p class="courses__card-topics"><span class="bold-underline">Related topics:</span>: ${course.topics.join(", ")}</p>
                    <p class="courses__card-author"><span class="bold-underline">Instructor</span>: ${course.instructor}</p>
                    <p class="courses__card-complexity"><span class="bold-underline">Comlexity</span>: ${course.difficulty}</p>
                    <p class="courses__card-rating"><span class="bold-underline">Rating</span>: ${course.rating}</p>
                    <button class="courses__btn-wish-list">Wish list </button>
                </div>
        </article>
    `
}


export function renderNumberOfResults(query, numberOfResults) {
    numbersOfCoursesElement.textContent = '';
    numbersOfCoursesElement.textContent = `Results for "${query}": ${numberOfResults} `
}