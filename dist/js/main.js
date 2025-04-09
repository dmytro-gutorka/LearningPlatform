import { getSearchQuery } from "./search.js";
import { filterCourses } from "./filters.js";
import { sortCourses } from "./sort.js";
import { renderCourses, renderPagination} from "./render.js";

const dataPath = "./assets/data/courses.json";

let allCourses = [];
let filteredCourses = [];
let currentPage = 1;
const coursesPerPage = 10;


fetch(dataPath)
    .then((res) => res.json())
    .then((data) => {
        allCourses = data;
        applyFilters();
        renderCurrentPage();
    })
    .catch(error => {
        console.error("Error loading courses:", error);
    });



const filtersBlock = document.querySelector(".courses__filters");
const sortSelect = document.querySelector(".courses__sorting-select");


filtersBlock?.addEventListener("change", () => {
    currentPage = 1;
    applyFilters();
});

sortSelect?.addEventListener("change", () => {
    currentPage = 1;
    applyFilters();
});

function applyFilters() {
    const query = getSearchQuery();
    let result = filterCourses(allCourses, query);
    result = sortCourses(result, sortSelect?.value);

    filteredCourses = result;
    renderCurrentPage();
}


function renderCurrentPage() {
    if (allCourses.length === 0) {
        console.log("Courses not loaded yet");
        return;
    }

    const totalItems = filteredCourses.length;
    const start = (currentPage - 1) * coursesPerPage;
    const end = start + coursesPerPage;
    const current = filteredCourses.slice(start, end);

    renderCourses(current);

    renderPagination(
        totalItems,
        currentPage,
        coursesPerPage,
        setPage
    );
}


function setPage(page) {
    currentPage = page;
    renderCurrentPage();
}
