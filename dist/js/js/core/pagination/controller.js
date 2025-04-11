import * as paginationView from "./view.js";
import * as paginationModel from "./model.js";


function controlPagination(action, clickedPage = null) {
    if (action === 'prev') paginationModel.state.currentPage--
    if (action === 'next') paginationModel.state.currentPage++
    if (action === 'number') paginationModel.state.currentPage = clickedPage

    paginationView.renderPaginationButtons(paginationModel.state.currentPage, 5)
}



export function initPagination() {
    paginationView.renderPaginationButtons(paginationModel.state.currentPage, 5)
    paginationView.addHandlerPagination(controlPagination)
}