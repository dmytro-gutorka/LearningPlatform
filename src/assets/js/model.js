import {PATH, RESULTS_PER_PAGE} from './config.js';


export const state = {
    courses: [],
    searchedCourses: [],
    query: '',
}


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
}


export function sortCourses(courses, sortField) {
    courses.sort((a, b) => b[sortField] - a[sortField])
    console.log(state.searchedCourses)
}
