function openModal(modalClass, activeClass) {
    modalClass.style.display = 'block';
    document.querySelector('body').classList.add(activeClass);
}

function closeModal(modalClass, activeClass) {
    modalClass.style.display = 'none';
    document.querySelector('body').classList.remove(activeClass);
}

function checkDigits(selector) {
    const numInputs = document.querySelectorAll(selector);
    numInputs.forEach(item => {
        item.addEventListener('input', event => {
            item.value = item.value.replace(/\D/, '');
        });
    });
}

export {openModal, closeModal, checkDigits};