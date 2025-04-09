export function sortCourses(courses, sortBy) {

    const sorted = [...courses];
    if (sortBy === "title") {
        sorted.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === "difficulty") {
        const order = { Advanced: 0, Intermediate: 1, Beginner: 2 };
        sorted.sort((a, b) => order[a.difficulty] - order[b.difficulty]);
    } else if (sortBy === "rating") {
        sorted.sort((a, b) => b.rating - a.rating);
    }
    return sorted;
}
