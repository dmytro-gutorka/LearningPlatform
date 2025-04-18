import {state} from "../../features/coursesPage/model.js";


export const filters = [filterByRating, filterByComplexity]


function filterByRating() {
    const inputValue = document.querySelector('input[name="rating"]:checked')?.value;
    if (!inputValue) return;

    state.filteredCourses = state.filteredCourses.filter(course => course.rating >= inputValue);
}


function filterByComplexity() {
    const inputValues = Array.from(document.querySelectorAll('input[name="level"]:checked'))
        .map(input => input.value.toLowerCase());
    if (!inputValues.length) return;

    state.filteredCourses = state.filteredCourses.filter(course => inputValues.includes(course.difficulty.toLowerCase()))
}