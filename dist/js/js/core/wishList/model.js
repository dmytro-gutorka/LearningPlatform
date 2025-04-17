export const state = {
    courses: [],
}


export function getCourseById(courseId) {
    if (!state.courses) return;
    return state.courses.find(course => course.id === courseId)
}


export function addCourseToWishList(courseId) {
    const wishList = JSON.parse(localStorage.getItem('coursesWishList')) || [];
    const courseById = getCourseById(courseId)

    wishList.push(courseById)

    localStorage.setItem('coursesWishList', JSON.stringify(wishList))
}


export function getWishListCourses() {
    return JSON.parse(localStorage.getItem('coursesWishList'))
}