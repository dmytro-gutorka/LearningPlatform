import * as model from './model.js';
import * as searchView from './views/searchView.js';
import * as sortView from './views/sortView.js';


//mb init state load all the courses from model.state.courses


async function controlSearch() {

    model.state.query = searchView.getQuery()
    if (model.state.query.length <= 0) return;

    // await model.loadCourses()
    //
    // model.loadSearchResult(model.state.query )
    //
    // searchView.renderNumberOfResults(model.state.query , model.state.searchedCourses.length)
    // searchView.renderCourses(model.state.searchedCourses)

    localStorage.setItem('searchQuery', model.state.query);
    window.location.href = 'src/courses.html';
}


async function controlSort(selectedValue) {
    if (!model.state.searchedCourses) return;

    model.sortCourses(model.state.searchedCourses, selectedValue)

    searchView.renderNumberOfResults(model.state.query, model.state.searchedCourses.length)
    searchView.renderCourses(model.state.searchedCourses)
}


async function test1 () {
    const query = localStorage.getItem('searchQuery');
    if (!query) return;

    model.state.query = query;
    await model.loadCourses();

    model.loadSearchResult(query);

    searchView.renderNumberOfResults(query, model.state.searchedCourses.length);
    searchView.renderCourses(model.state.searchedCourses);
}


function init() {
    searchView.addSearchHandler(controlSearch);
    sortView.addSortHandler(controlSort);
    searchView.test(test1)
}


init()