export function getSearchQuery() {
    return localStorage.getItem("searchQuery")?.toLowerCase().trim() || "";
}

