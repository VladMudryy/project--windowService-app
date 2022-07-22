function modal() {
    function createModal(clickedModal, modalClass, closeClass) {
        const startModal = document.querySelectorAll(clickedModal),
            modal = document.querySelector(modalClass);

        function openModal() {
            modal.style.display = 'block';
            document.querySelector('body').classList.add('modal-open');
        }

        function closeModal() {
            modal.style.display = 'none';
            document.querySelector('body').classList.remove('modal-open');
        }

        startModal.forEach(item => {
                item.addEventListener('click', event => {
                    event.preventDefault();
                    
                    openModal();
            });
        });
        
        modal.addEventListener('click', event => {
            event.preventDefault();

            if (event.target.classList.contains(modalClass.slice(1)) || event.target.closest(closeClass)) {
                closeModal();
            }
        });
    }

    createModal('.popup_engineer_btn', '.popup_engineer', '.popup_close');
    createModal('.phone_link', '.popup', '.popup_close');
}

export default modal;

