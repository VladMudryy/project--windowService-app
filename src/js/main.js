import './slider';
// import modules
import modal from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeModalState from './modules/changeModalState';
import timer from './modules/timer';
import gallery from './modules/gallery';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    let modalState = {};
    changeModalState(modalState);

    modal();
    tabs('.glazing_block', '.glazing_content', 'active');
    tabs('.no_click', '.decoration_content-item', 'after_click');
    tabs('.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');
    forms(modalState);
    timer('.container1', '2022-08-17');
    gallery();
});