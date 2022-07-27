const gallery = () => {
    const parentGallery = document.querySelector('.works'),
          imagesPopup = document.createElement('div'),
          images = document.createElement('img');

    imagesPopup.classList.add('popup_img');
    parentGallery.appendChild(imagesPopup);

    imagesPopup.style.cssText = `
        justify-content: center;
        align-items: center;
        display: none;
    `;

    imagesPopup.appendChild(images);

    images.style.cssText = `
        padding: 30px;
        width: 100%;
        max-height: 600px;
        max-width: 600px;
    `;

    parentGallery.addEventListener('click', event => {
        event.preventDefault();
        let target = event.target;
        
        if (target && target.classList.contains('preview')) {
            imagesPopup.style.display = 'flex';
            const imgSrc = target.parentNode.getAttribute('href');
            images.setAttribute('src', imgSrc);
            document.querySelector('body').style.overflow = 'hidden';
        }

        if (target && target.classList.contains('popup_img')) {
            imagesPopup.style.display = 'none';
            document.querySelector('body').style.overflow = '';
        }
    });
};

export default gallery;