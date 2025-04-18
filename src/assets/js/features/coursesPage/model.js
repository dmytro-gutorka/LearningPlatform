import { PATH } from '../../core/constants.js';
import { getJSON } from '../../core/helpers.js';

import { filters } from '../../core/filtering/filtering.js'



export const state = {
    courses: [],
    searchedCourses: [],
    filteredCourses: [],
    query: '',
}


export async function loadCourses() {

    try {
        const data =  await getJSON(PATH)
        return Array.isArray(data) ? data : [];
    }

    catch(err) {
        console.error('Could not load the courses', err)
    }
}


export function loadSearchResult(query) {
    state.searchedCourses = state.courses.filter(course =>
        course.title.toLowerCase().includes(query.toLowerCase()));

    state.filteredCourses = [...state.searchedCourses]
}


export function copySearchResult() {
    state.filteredCourses = [...state.searchedCourses]
}


export function applyFilters() {
    filters.forEach(filterFn => filterFn())
}
