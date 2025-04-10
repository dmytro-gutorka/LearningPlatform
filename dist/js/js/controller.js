import { COURSE_PAGE, INDEX_PAGE } from './core/constants.js';

import * as model from './model.js';
import * as searchView from './views/searchView.js';
import * as sortView from './views/sortView.js';


//mb init state load all the courses from model.state.courses


function controlSearch() {
    const currentPage =  window.location.pathname
    const query = searchView.getQuery();

    if (query.length <= 0) return;

    if (currentPage !== COURSE_PAGE) window.location.href = 'src/courses.html';
    if (currentPage === COURSE_PAGE) controlSearchPage();
}


async function controlSearchPage() {
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

    model.sortCourses(model.state.searchedCourses, selectedValue)

    searchView.renderNumberOfResults(query, model.state.searchedCourses.length)
    searchView.renderCourses(model.state.searchedCourses)
}



function init() {
    const currentPage =  window.location.pathname;

    if (currentPage === COURSE_PAGE) {
        console.log(1)
        searchView.addSearchHandler(controlSearchPage);
        searchView.addSearchPageHandler(controlSearch)
        sortView.addSortHandler(controlSort);
    }

    if (currentPage === INDEX_PAGE) {
        searchView.addSearchPageHandler(controlSearch)
    }
}


init()

