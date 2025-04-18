const courseCardsContainer = document.querySelector('.courses__cards')


export function addWishListHandler(handler) {

    courseCardsContainer.addEventListener('click', (e) => {
        const clickedBtn = e.target.closest('.courses__btn-wish-list')

        if (!clickedBtn) return;

        const courseCardId = +clickedBtn.parentElement.parentElement.dataset.id

        handler(courseCardId)
    })
}