export function getQuery() {
    const searchInput = document.querySelector('.header__search-field');
    const query = searchInput.value.trim();

    searchInput.value = '';

    return query
}