import * as wishListView from './view.js'
import * as wishListModel from './model.js'

import {loadCourses, updateJsonWithCourses} from "../../features/coursesPage/model.js";

import * as coursePageModel from "../../features/coursesPage/model.js";
import * as searchView from "../../features/coursesPage/views/searchView.js";


async function controlWithList(courseId) {
    if (!wishListModel.state.courses.length)
        wishListModel.state.courses = await loadCourses()

    wishListModel.updateWishList(courseId)


    let coursesWithWishListProperty

    if (coursePageModel.state.filteredCourses.length >= 1)
        coursesWithWishListProperty = updateJsonWithCourses(coursePageModel.state.filteredCourses)

    if (coursePageModel.state.filteredCourses.length <= 0)
        coursesWithWishListProperty = updateJsonWithCourses(coursePageModel.state.searchedCourses)

    searchView.renderCourses(coursesWithWishListProperty)
}


export async function initWishList() {
    wishListView.addWishListHandler(controlWithList)


}
