function openModal(modalClass, activeClass) {
    modalClass.style.display = 'block';
    document.querySelector('body').classList.add(activeClass);
}

function closeModal(modalClass, activeClass) {
    modalClass.style.display = 'none';
    document.querySelector('body').classList.remove(activeClass);
}

export {openModal, closeModal};