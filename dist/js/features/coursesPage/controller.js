import * as model from './model.js';
import * as searchView from './views/searchView.js';
import * as sortView from './views/sortView.js';



//mb init state load all the courses from model.state.courses
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

    model.sortCourses(model.state.searchedCourses, selectedValue)

    searchView.renderNumberOfResults(query, model.state.searchedCourses.length)
    searchView.renderCourses(model.state.searchedCourses)
}



export function initCoursesPage() {
    searchView.addSearchHandler(controlSearchPage);
    sortView.addSortHandler(controlSort);
}




