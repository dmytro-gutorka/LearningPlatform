const coursePagePath = "courses.html";


document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector(".header__search-field");
    if (!input) return;

    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            const query = input.value.trim();
            if (query.length > 1) {
                localStorage.setItem("searchQuery", query);
                window.location.href = coursePagePath;
            }
        }
    });
});
