function openModal(modalClass) {
    modalClass.style.display = 'block';
    document.querySelector('body').classList.add('modal-open');
}

function closeModal(modalClass) {
    modalClass.style.display = 'none';
    document.querySelector('body').classList.remove('modal-open');
}

export {openModal, closeModal};