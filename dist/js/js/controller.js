import {COURSE_PAGE} from './core/constants.js';

import * as model from './model.js';
import * as searchView from './views/searchView.js';
import * as sortView from './views/sortView.js';


//mb init state load all the courses from model.state.courses


async function controlSearch() {
    const currentPage =  window.location.href
    const query = searchView.getQuery();

    if (query.length <= 0) return;

    if (!currentPage.includes(COURSE_PAGE)) window.location.href = COURSE_PAGE;
    if (currentPage.includes(COURSE_PAGE)) controlSearchPage();

}


async function controlSearchPage() {
    const query = localStorage.getItem('searchQuery');
    if (!query) return;

    model.state.query = query;
    await model.loadCourses();

    model.loadSearchResult(query);

    searchView.renderNumberOfResults(query, model.state.searchedCourses.length);
    searchView.renderCourses(model.state.searchedCourses);
}


async function controlSort(selectedValue) {
    if (!model.state.searchedCourses) return;

    model.sortCourses(model.state.searchedCourses, selectedValue)

    searchView.renderNumberOfResults(model.state.query, model.state.searchedCourses.length)
    searchView.renderCourses(model.state.searchedCourses)
}




function init() {
    searchView.addSearchHandler(controlSearch);
    searchView.addSearchPageHandler(controlSearchPage)
    sortView.addSortHandler(controlSort);
}


init()