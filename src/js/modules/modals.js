import {openModal, closeModal} from '../services/services';

function modal() {
    function createModal(clickedModal, modalClass, closeClass) {
        const startModal = document.querySelectorAll(clickedModal),
            modal = document.querySelector(modalClass);

        startModal.forEach(item => {
                item.addEventListener('click', event => {
                    event.preventDefault();
                    
                    openModal(modal);
            });
        });
        
        modal.addEventListener('click', event => {
            event.preventDefault();

            if (event.target.classList.contains(modalClass.slice(1)) || event.target.closest(closeClass)) {
                closeModal(modal);
            }
        });
    }

    function showModalByTimer(selector, time) {
        setTimeout(() => {
            const modal = document.querySelector(selector);
            openModal(modal);
        }, time);
    }

    createModal('.popup_engineer_btn', '.popup_engineer', '.popup_close');
    createModal('.phone_link', '.popup', '.popup_close');
    showModalByTimer('.popup', 60000);

}

export default modal;

