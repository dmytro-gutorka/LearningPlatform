import { initCoursesPage } from './src/assets/js/features/coursesPage/controller.js'
import { initGlobalSearch } from './src/assets/js/core/search/controller.js'



const routes = {
    '/LearningPlatform/src/courses.html': initCoursesPage,
}


function initRouter() {
    const currentPage = window.location.pathname;
    const initPage = routes[currentPage];

    if (initPage) initPage()
}


initRouter()
initGlobalSearch()