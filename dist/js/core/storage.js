import {SEARCH_QUERY_KEY} from './constants'



export function saveSearchQuery(query) {
    localStorage.setItem(SEARCH_QUERY_KEY, query)
}


export function getSearchQuery() {
    return localStorage.getItem(SEARCH_QUERY_KEY)
}