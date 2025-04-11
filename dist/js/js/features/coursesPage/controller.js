import * as model from './model.js';
import * as searchView from './views/searchView.js';
import * as sortView from './views/sortView.js';
import * as filtersView from './views/filterView.js';
import {copySearchResult} from "./model.js";



//mb init state load all the courses from model.state.courses
//reset result after page reload


export async function controlSearchPage() {
    const query = localStorage.getItem('searchQuery');
    if (!query) return;

    await model.loadCourses();

    model.loadSearchResult(query);
    searchView.renderNumberOfResults(query, model.state.searchedCourses.length);
    searchView.renderCourses(model.state.searchedCourses);
}


function controlSort(selectedValue) {
    const query = localStorage.getItem('searchQuery');
    if (!model.state.searchedCourses) return;

    model.sortCourses(model.state.filteredCourses, selectedValue)

    searchView.renderNumberOfResults(query, model.state.filteredCourses.length)
    searchView.renderCourses(model.state.filteredCourses)
}


function controlFilters() {
    const query = localStorage.getItem('searchQuery');

    model.copySearchResult()
    model.applyFilters()

    searchView.renderNumberOfResults(query, model.state.filteredCourses.length)
    searchView.renderCourses(model.state.filteredCourses)
}


export function initCoursesPage() {
    searchView.addSearchHandler(controlSearchPage);
    sortView.addSortHandler(controlSort);
    filtersView.addFiltersHandler(controlFilters)
}




