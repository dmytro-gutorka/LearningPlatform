import * as model from './model.js';
import * as searchView from './views/searchView.js';
import * as sortView from './views/sortView.js';
import * as filtersView from './views/filterView.js';
import * as paginationController from '../../core/pagination/controller.js'
import * as paginationModel from '../../core/pagination/model.js'


//mb init state load all the courses from model.state.courses
//reset result after page reload

//paginationModel.state.currentPage = 1 move to function controlHandlePaginatedData ?


export async function controlSearchPage() {
    const query = localStorage.getItem('searchQuery');

    if (!query) return;

    await model.loadCourses();
    model.loadSearchResult(query);

    controlHandlePaginatedData(model.state.searchedCourses)
}


function controlSort(selectedValue) {
    if (!model.state.searchedCourses) return;

    model.sortCourses(model.state.filteredCourses, selectedValue)

    controlHandlePaginatedData(model.state.filteredCourses)
}


function controlFilters() {
    model.copySearchResult()
    model.applyFilters()

    controlHandlePaginatedData(model.state.filteredCourses)
}


function controlHandlePaginatedData(data) {
    const query = localStorage.getItem('searchQuery');

    paginationModel.state.currentPage = 1

    const paginatedData = paginationController.controlPaginatedData(data)

    searchView.renderNumberOfResults(query, data.length)
    searchView.renderCourses(paginatedData)
}


export function initCoursesPage() {
    searchView.addSearchHandler(controlSearchPage);
    sortView.addSortHandler(controlSort);
    filtersView.addFiltersHandler(controlFilters)
}




