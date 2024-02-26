const chooseColourItem = document.querySelectorAll('.choose-colour__item');
const contentImage = document.querySelectorAll('.content-image');

chooseColourItem.forEach(function (element) {
    element.addEventListener('click', open)
})

function open(e) {
    const target = e.currentTarget;
    const button = target.dataset.button;
    const contentActive = document.querySelectorAll(`.${button}`)

    chooseColourItem.forEach(function (item) {
        item.classList.remove('item--active');
    })
    target.classList.add('item--active');

    contentImage.forEach(function (item) {
        item.classList.remove('content-image--active');
    })
    contentActive.forEach(function (item) {
        item.classList.add('content-image--active');
    })
}