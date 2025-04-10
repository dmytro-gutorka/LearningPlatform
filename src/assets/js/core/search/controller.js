import { controlSearchPage } from "../../features/coursesPage/controller.js";
import { saveSearchQuery } from '../storage.js'

import { COURSE_PAGE } from "../constants.js";
import { isCurrentPage} from "../helpers.js";
import { getQuery } from "./searchView.js";



export function initGlobalSearch() {
    const searchForm = document.querySelector('.search');

    if (!searchForm) return

    searchForm.addEventListener('submit', (e) => {
        e.preventDefault()
        handleSearch()
    })
}


async function handleSearch() {
    const query = getQuery();
    saveSearchQuery(query);

    if (query.length <= 0) return;

    if (!isCurrentPage(COURSE_PAGE)) window.location.href = 'src/courses.html';
    if (isCurrentPage(COURSE_PAGE)) controlSearchPage();
}
