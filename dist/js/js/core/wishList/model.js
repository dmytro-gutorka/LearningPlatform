export const state = {
    courses: [],
}


export function getCourseById(courseId) {
    if (!state.courses) return;

    return state.courses.find(course => course.id === courseId)
}


export function updateWishList(courseId) {
    const coursesId = getWishListCourses().map(course => course.id) || []

    if (coursesId.some(id => id === courseId)) removeCourseFromWishList(courseId)
    if (!coursesId.some(id => id === courseId)) addCourseToWishList(courseId)
}


function addCourseToWishList(courseId) {
    const wishList = getWishListCourses()
    const courseById = getCourseById(courseId)

    wishList.push(courseById)
    saveWishListToLocalStorage(wishList)
}


function removeCourseFromWishList(courseId) {
    const wishList = getWishListCourses()
    const courseById = wishList.find(course => course.id === courseId)
    const courseIndex = wishList.indexOf(courseById)

    wishList.splice(courseIndex, 1)
    saveWishListToLocalStorage(wishList)
}


function saveWishListToLocalStorage(wishList) {
    localStorage.setItem('coursesWishList', JSON.stringify(wishList))
}


export function getWishListCourses() {
    return JSON.parse(localStorage.getItem('coursesWishList')) || []
}
