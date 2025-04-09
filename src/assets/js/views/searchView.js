const searchForm = document.querySelector('.search');
const searchInput = document.querySelector('.header__search-field');
const coursesContainer = document.querySelector('.courses__cards');
const numbersOfCoursesElement = document.querySelector('.courses__result');


export function test(handler) {
    window.addEventListener('DOMContentLoaded', async () => {
        handler()
    });

}




export function addSearchHandler(handler) {
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault()

        handler()
    })
}


export function getQuery() {
    const query = searchInput.value.trim();
    searchInput.value = '';

    return query
}


export function renderCourses(data) {
    const markup = data.map(course => generateCourseMarkup(course)).join('')

    coursesContainer.innerHTML = '';
    coursesContainer.insertAdjacentHTML('afterbegin', markup)
}


function generateCourseMarkup(course) {
    return `
        <article class="courses__card">
            <img class="courses__card-image" src="${course.img}" alt="" width="300" height="300">
                <div class="courses__card-body">
                    <h3 class="courses__card-title">${course.title}</h3>
                    <p class="courses__card-description"><span class="bold-underline">Description</span>: ${course.description}</p>
                    <p class="courses__card-topics"><span class="bold-underline">Related topics:</span>: ${course.topics.join(", ")}</p>
                    <p class="courses__card-author"><span class="bold-underline">Instructor</span>: ${course.instructor}</p>
                    <p class="courses__card-complexity"><span class="bold-underline">Comlexity</span>: ${course.difficulty}</p>
                    <p class="courses__card-rating"><span class="bold-underline">Rating</span>: ${course.rating}</p>
                </div>
        </article>
    `
}


export function renderNumberOfResults(query, numberOfResults) {
    numbersOfCoursesElement.textContent = '';
    numbersOfCoursesElement.textContent = `Results for "${query}": ${numberOfResults} `
}