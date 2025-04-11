import {PATH} from '../../core/constants.js';



export const state = {
    courses: [],
    searchedCourses: [],
    filteredCourses: [],
    query: '',
}


const filters = [filterByRating, filterByComplexity]



async function getJSON(url) {
    const result = await fetch(url);
    const data = await result.json();

    if (!result.ok) return;

    return data
}


export async function loadCourses() {

    try {
        state.courses  = await getJSON(PATH)
    }

    catch(err) {
        console.error('Error occurred', err)
    }
}


export function loadSearchResult(query) {
    state.searchedCourses = state.courses.filter(course =>
        course.title.toLowerCase().includes(query.toLowerCase()));

    state.filteredCourses = [...state.searchedCourses]
}


export function sortCourses(courses, sortBy) {

    const sortType = {
        title: sortByTitle,
        rating: sortByRating,
        complexityLevel: sortByComplexity
    }

    if (sortType[sortBy]) courses.sort(sortType[sortBy]);
}


const sortByTitle = (a, b) => a.title.localeCompare(b.title);

const sortByRating = (a, b) => b.rating - a.rating;

const sortByComplexity = (a, b) => a.complexityLevel - b.complexityLevel ;



function filterByRating() {
    console.log(state.filteredCourses)

    const inputValue = document.querySelector('input[name="rating"]:checked')?.value;
    if (!inputValue) return;

    state.filteredCourses = state.filteredCourses.filter(course => course.rating >= inputValue);
    console.log(state.filteredCourses)
}


function filterByComplexity() {
    console.log(state.filteredCourses)
    const inputValues = Array.from(document.querySelectorAll('input[name="level"]:checked'))
        .map(input => input.value.toLowerCase());
    if (!inputValues.length) return;

    state.filteredCourses = state.filteredCourses.filter(course => inputValues.includes(course.difficulty.toLowerCase()))
    console.log(state.filteredCourses)
}


export function applyFilters() {
    state.filteredCourses = [...state.searchedCourses]
    filters.forEach(filterFn => filterFn())
}