import * as wishListView from './view.js'
import * as wishListModel from './model.js'

import { renderCourses } from '../../features/coursesPage/views/searchView.js'
import { loadCourses } from "../../features/coursesPage/model.js";



async function controlWithList(courseId) {
    if (!wishListModel.state.courses.length) wishListModel.state.courses = await loadCourses()
    wishListModel.addCourseToWishList(courseId)

    renderCourses(wishListModel.getWishListCourses()
    )
}



export function initWishList() {
    wishListView.addWishListHandler(controlWithList)
}