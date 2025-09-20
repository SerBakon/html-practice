function toggle(buttonClass) {
    const buttonElement = document.querySelector(buttonClass);
    if(buttonElement.classList.contains('is-toggled')) {
        buttonElement.classList.remove('is-toggled');
    } else {
        turnOffPrev();
        buttonElement.classList.add('is-toggled');
    }
}

function turnOffPrev() {
    const prevButton = document.querySelector('.is-toggled');
    if(prevButton) {
        prevButton.classList.remove('is-toggled');
    }
}