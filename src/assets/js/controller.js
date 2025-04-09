import * as model from './model.js';
import * as searchView from './views/searchView.js';
import * as sortView from './views/sortView.js';


//mb init state load all the courses from model.state.courses


async function controlSearch() {
    model.state.query = searchView.getQuery()
    if (model.state.query.length <= 0) return;

    await model.loadCourses()

    model.loadSearchResult(model.state.query )

    searchView.renderNumberOfResults(model.state.query , model.state.searchedCourses.length)
    searchView.renderCourses(model.state.searchedCourses)
}


async function controlSort(selectedValue) {
    if (!model.state.searchedCourses) return;

    model.sortCourses(model.state.searchedCourses, selectedValue)

    searchView.renderNumberOfResults(model.state.query, model.state.searchedCourses.length)
    searchView.renderCourses(model.state.searchedCourses)

}


function init() {
    searchView.addSearchHandler(controlSearch);
    sortView.addSortHandler(controlSort);
}


init()