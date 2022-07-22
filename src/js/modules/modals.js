function modal(clickedModal, modalClass, closeClass) {
    const startModal = document.querySelectorAll(clickedModal),
          modalAppere = document.querySelector(modalClass);

    function openModal() {
        modalAppere.style.display = 'block';
        document.querySelector('body').style.overflow = 'hidden';
    }

    function closeModal() {
        modalAppere.style.display = 'none';
        document.querySelector('body').style.overflow = '';
    }

    startModal.forEach(item => {
            item.addEventListener('click', event => {
                event.preventDefault();
                
                openModal();
        });
    });
    
    modalAppere.addEventListener('click', event => {
        event.preventDefault();

        if (event.target.classList.contains(modalClass.slice(1)) || event.target.closest(closeClass)) {
            closeModal();
        }
    });
}

modal('.popup_engineer_btn', '.popup_engineer', '.popup_close');
modal('.phone_link', '.popup', '.popup_close');
