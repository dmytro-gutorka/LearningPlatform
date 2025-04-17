import { initCoursesPage } from './src/assets/js/features/coursesPage/controller.js'
import { initGlobalSearch } from './src/assets/js/core/search/controller.js'
import { initSlides } from './src/assets/js/core/slider/controller.js'
import { initPagination } from './src/assets/js/core/pagination/controller.js'
import { initWishList } from './src/assets/js/core/wishList/controller.js'


const routes = {
    '/LearningPlatform/src/courses.html': [initCoursesPage, initPagination],
    '/LearningPlatform/index.html': [initSlides]
}


function initRouter() {
    const currentPage = window.location.pathname;
    const initModules = routes[currentPage];

    if (initModules) initModules.forEach(initFn => initFn())
}


initRouter()
initGlobalSearch()
initWishList()