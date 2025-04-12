import * as paginationView from "./view.js";
import * as paginationModel from "./model.js";
import * as coursePageModel from "../../features/coursesPage/model.js";
import * as searchView from "../../features/coursesPage/views/searchView.js";

import { getTotalPages } from "./model.js";


function controlPagination(action, clickedPage = null) {
    if (action === 'prev') paginationModel.state.currentPage--
    if (action === 'next') paginationModel.state.currentPage++
    if (action === 'number') paginationModel.state.currentPage = clickedPage


    let paginatedData

    if (coursePageModel.state.filteredCourses.length >= 1)
        paginatedData = controlPaginatedData(coursePageModel.state.filteredCourses)

    if (coursePageModel.state.filteredCourses.length <= 0)
        paginatedData = controlPaginatedData(coursePageModel.state.searchedCourses)

    searchView.renderCourses(paginatedData);
}


export function controlPaginatedData(data) {
    const totalPages = paginationModel.getTotalPages(data);
    const paginatedData = paginationModel.getPaginatedData(data)

    paginationView.renderPaginationButtons(paginationModel.state.currentPage, totalPages)
    console.log(paginationModel.state.currentPage)
    console.log(totalPages)
    console.log(paginatedData)

    return paginatedData
}


export function initPagination() {
    paginationView.renderPaginationButtons(paginationModel.state.currentPage, getTotalPages(coursePageModel.state.searchedCourses))
    paginationView.addHandlerPagination(controlPagination)
}

