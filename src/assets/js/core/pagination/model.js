import { RESULTS_PER_PAGE} from '../constants.js'


export const state = {
    currentPage: 1,
}


export function getTotalPages(data) {
    return Math.ceil(data.length / RESULTS_PER_PAGE)
}


export function getPaginatedData(data) {
    const start = (state.currentPage - 1) * RESULTS_PER_PAGE;
    const end =  state.currentPage * RESULTS_PER_PAGE;

    return data.slice(start, end)
}