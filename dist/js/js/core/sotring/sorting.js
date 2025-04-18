const sortByTitle = (a, b) => a.title.localeCompare(b.title);

const sortByRating = (a, b) => b.rating - a.rating;

const sortByComplexity = (a, b) => a.complexityLevel - b.complexityLevel ;


export function sortCourses(courses, sortBy) {

    const sortType = {
        title: sortByTitle,
        rating: sortByRating,
        complexityLevel: sortByComplexity
    }

    if (sortType[sortBy]) courses.sort(sortType[sortBy]);
}
