const sortSelect = document.querySelector('.courses__sorting-select');


export function addSortHandler(handler) {
    sortSelect?.addEventListener('change', (e) => {
        const selectedValue = e.target.value
        handler(selectedValue)
    })

}
