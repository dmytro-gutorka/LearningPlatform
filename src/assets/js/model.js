import {PATH, RESULTS_PER_PAGE} from './core/constants.js';


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


export function sortCourses(courses, sortBy) {

    const sortType = {
        title: sortByTitle,
        rating: sortByRating,
        complexityLevel: sortByComplexity
    }

    if(sortType[sortBy]) courses.sort(sortType[sortBy]);
}


const sortByTitle = (a, b) => a.title.localeCompare(b.title);

const sortByRating = (a, b) => b.rating - a.rating;

const sortByComplexity =  (a, b) => a.complexityLevel - b.complexityLevel ;



export function isCurrentPage() {

    return
}
