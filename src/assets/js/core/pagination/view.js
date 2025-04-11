let paginationContainer = document.querySelector('.pagination');



export function addHandlerPagination(handler) {
    paginationContainer.addEventListener('click', (e) => {
        const clickedEl = e.target.closest('.pagination__btn')

        if (!clickedEl) return;

        const clickedPage = +clickedEl.dataset?.page

        if (clickedEl.classList.contains('pagination__prev-btn')) handler('prev');
        if (clickedEl.classList.contains('pagination__next-btn')) handler('next');
        if (clickedEl.classList.contains('pagination__number-btn')) handler('number', clickedPage)
    })
}


export function renderPaginationButtons(currentPage, maxPage) {
    let markup = ''
    paginationContainer.innerHTML = ''

    if (currentPage > 1) markup += generatePaginationPrevButton()
    markup += generatePaginationNumbersButton(currentPage, maxPage)
    if (currentPage !== maxPage) markup += generatePaginationNextButton()

    paginationContainer.innerHTML = markup;
}


export function generatePaginationNumbersButton(currentPage, maxPage) {
    const prevPage = currentPage - 1
    const nextPage = currentPage + 1

    let markup = ''

    for (let page = prevPage; page <= nextPage; page++) {
        if (page === 0 || page > maxPage) continue;

        markup += `<button class="pagination__btn pagination__number-btn 
            ${page === currentPage ? "pagination__number-btn-active" : ""}" data-page="${page}">${page}</button>`
    }
    return markup
}


export function generatePaginationPrevButton() {
    return `<button class="pagination__btn pagination__prev-btn">P</button>`
}


export function generatePaginationNextButton() {
    return `<button class="pagination__btn pagination__next-btn">N</button>`
}

