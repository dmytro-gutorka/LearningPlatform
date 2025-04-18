import * as helper from '../../core/helpers.js'
import * as model from './model.js';
import * as searchView from './views/searchView.js';
import * as sortView from './views/sortView.js';
import * as filtersView from './views/filterView.js';
import * as paginationController from '../../core/pagination/controller.js'
import { sortCourses } from '../../core/sotring/sorting.js'


//mb init state load all the courses from model.state.courses
//reset result after page reload
// filter, sort reset ?


export async function controlSearchPage() {
    const query = localStorage.getItem('searchQuery');

    if (!query) return;

    model.state.courses = await model.loadCourses();

    // всего скорей нужно тут изменять model.state.courses - добавлять проперти к каждому курсу

    model.loadSearchResult(query);

    controlPaginatedData(model.state.searchedCourses)
}


function controlSort(selectedValue) {
    if (!model.state.searchedCourses) return;

    sortCourses(model.state.filteredCourses, selectedValue)

    controlPaginatedData(model.state.filteredCourses)
}


function controlFilters() {
    model.copySearchResult()
    model.applyFilters()

    controlPaginatedData(model.state.filteredCourses)
}


function controlPaginatedData(data) {
    const query = localStorage.getItem('searchQuery');

    helper.resetPagination()

    const paginatedData = paginationController.controlPaginatedData(data)

    searchView.renderNumberOfResults(query, data.length)
    searchView.renderCourses(paginatedData)
}


export function initCoursesPage() {
    searchView.addSearchHandler(controlSearchPage);
    sortView.addSortHandler(controlSort);
    filtersView.addFiltersHandler(controlFilters)
}




