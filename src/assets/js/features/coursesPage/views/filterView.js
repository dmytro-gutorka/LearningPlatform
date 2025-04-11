const filtersContainer = document.querySelector('.courses__filters');


export function addFiltersHandler(handler) {
    filtersContainer.addEventListener('change', handler)
}