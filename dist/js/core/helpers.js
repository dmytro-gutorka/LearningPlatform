import {COURSE_PAGE} from "./constants.js";


export function isCurrentPage(particularPage) {
    return window.location.pathname === particularPage;
}