import * as model from './model.js';
import * as searchView from './views/searchView.js';
import * as sortView from './views/sortView.js';
import * as filtersView from './views/filterView.js';
import * as paginationController from '../../core/pagination/controller.js'
import * as paginationModel from '../../core/pagination/model.js'


//mb init state load all the courses from model.state.courses
//reset result after page reload


export async function controlSearchPage() {
    paginationModel.state.currentPage = 1

    const query = localStorage.getItem('searchQuery');
    if (!query) return;

    await model.loadCourses();
    model.loadSearchResult(query);

    controlHandlePaginatedData(model.state.searchedCourses, query)
}


function controlSort(selectedValue) {
    paginationModel.state.currentPage = 1
    const query = localStorage.getItem('searchQuery');

    if (!model.state.searchedCourses) return;

    model.sortCourses(model.state.filteredCourses, selectedValue)

    controlHandlePaginatedData(model.state.filteredCourses, query)
}


function controlFilters() {
    paginationModel.state.currentPage = 1
    const query = localStorage.getItem('searchQuery');

    model.copySearchResult()
    model.applyFilters()

    controlHandlePaginatedData(model.state.filteredCourses, query)
}


function controlHandlePaginatedData(data, query) {
    const paginatedData = paginationController.controlPaginatedData(data)

    searchView.renderNumberOfResults(query, data.length)
    searchView.renderCourses(paginatedData)
}


export function initCoursesPage() {
    searchView.addSearchHandler(controlSearchPage);
    sortView.addSortHandler(controlSort);
    filtersView.addFiltersHandler(controlFilters)
}




