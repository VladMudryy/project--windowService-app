import {openModal, closeModal} from '../services/services';

function modal() {
    function createModal({clickedModal, modalClass, closeClass, activeClass, prevModal = null, closeOverlay = true}) {
        const startModal = document.querySelectorAll(clickedModal),
              modal = document.querySelector(modalClass),
              prev = document.querySelector(prevModal);

        startModal.forEach(item => {
                item.addEventListener('click', event => {
                    if (prevModal) {
                        closeModal(prev, activeClass);
                        openModal(modal, activeClass);
                    } else {
                        openModal(modal, activeClass);
                    }
            });
        });
        
        modal.addEventListener('click', event => {
            if ((event.target.classList.contains(modalClass.slice(1)) || event.target.closest(closeClass)) && 
            closeOverlay) {
                closeModal(modal, activeClass);
            } else if (event.target.closest(closeClass)) {
                closeModal(modal, activeClass);
            }
        });
    }

    function showModalByTimer(selector, activeClass, time) {
        setTimeout(() => {
            const modal = document.querySelector(selector);
            openModal(modal, activeClass);
        }, time);
    }

    createModal({
        clickedModal: '.popup_engineer_btn',
        modalClass: '.popup_engineer',
        closeClass: '.popup_close',
        activeClass: 'modal-open'
        });
    createModal({
        clickedModal: '.phone_link',
        modalClass: '.popup',
        closeClass: '.popup_close',
        activeClass: 'modal-open'
        });
    showModalByTimer('.popup', 'modal-open', 60000);
    // Calculator modals
    createModal({
        clickedModal: '.popup_calc_btn',
        modalClass: '.popup_calc',
        closeClass: '.popup_calc_close',
        activeClass: 'modal-open'
        });
    createModal({
        clickedModal: '.popup_calc_button',
        modalClass: '.popup_calc_profile',
        closeClass: '.popup_calc_profile_close',
        activeClass: 'modal-open',
        prevModal: '.popup_calc',
        closeOverlay: false
        });
    createModal({
        clickedModal: '.popup_calc_profile_button',
        modalClass: '.popup_calc_end',
        closeClass: '.popup_calc_end_close',
        activeClass: 'modal-open',
        prevModal: '.popup_calc_profile',
        closeOverlay: false
        });

}

export default modal;



