import { PATH } from '../../core/constants.js';
import { getJSON } from '../../core/helpers.js';

import { filters } from '../../core/filtering/filtering.js'
import {getWishListCourses} from "../../core/wishList/model.js";



export const state = {
    courses: [],
    searchedCourses: [],
    filteredCourses: [],
}


export async function loadCourses() {

    try {
        const loadedCourses =  await getJSON(PATH)
        const updatedCourses = updateJsonWithCourses(loadedCourses)
        return Array.isArray(updatedCourses) ? updatedCourses : [];
    }

    catch(err) {
        console.error('Could not load the courses', err)
    }
}


export function loadSearchResult(query) {
    state.searchedCourses = state.courses.filter(course =>
        course.title.toLowerCase().includes(query.toLowerCase()));
}


export function copySearchResult() {
    state.filteredCourses = [...state.searchedCourses]
}


export function applyFilters() {
    filters.forEach(filterFn => filterFn())
}


export function updateJsonWithCourses(loadedCourses) {
    const wishListCourses = getWishListCourses()
    const wishListIds = wishListCourses.map(course => course.id)

    return loadedCourses.map(course => {
        course.isWishListed = wishListIds.includes(course.id)
        return course
    })
}