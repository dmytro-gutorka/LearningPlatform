import * as paginationModel from "./pagination/model.js";



export function isCurrentPage(page) {
    return window.location.pathname === page;
}


export function resetPagination() {
    paginationModel.state.currentPage = 1
}


export async function getJSON(url) {
    const result = await fetch(url);
    const data = await result.json();

    if (!result.ok) return;

    return data
}
