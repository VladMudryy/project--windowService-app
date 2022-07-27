function calcScroll() {
    let div = document.createElement('div');

    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';

    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
}

const scrollRight = calcScroll();

function openModal(modalClass, activeClass = 'modal-open') {
    modalClass.style.display = 'block';
    document.querySelector('body').classList.add(activeClass);
    document.querySelector('body').style.marginRight = `${scrollRight}px`;
}

function closeModal(modalClass, activeClass = 'modal-open') {
    modalClass.style.display = 'none';
    document.querySelector('body').classList.remove(activeClass);
    document.querySelector('body').style.marginRight = `0px`;
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