export function filterCourses(courses, query) {
    let result = [...courses];

    if (query) result = result.filter(c => c.title.toLowerCase().includes(query));


    const rating = document.querySelector("input[name=\"rating\"]:checked")?.value;
    if (rating) {
        result = result.filter(c => c.rating >= parseFloat(rating));
    }

    const levels = Array.from(document.querySelectorAll("input[name=\"level\"]:checked"))
        .map(i => i.value.toLowerCase());

    if (levels.length > 0) {
        result = result.filter(c => levels.includes(c.difficulty.toLowerCase()));
    }

    return result;
}
