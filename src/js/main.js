import './slider';
// import modules
import modal from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeModalState from './modules/changeModalState';
import tetx from './modules/tetx';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    let modalState = {};
    tetx(modalState);
    console.log(modalState);
    changeModalState(modalState);
    modal();
    tabs('.glazing_block', '.glazing_content', 'active');
    tabs('.no_click', '.decoration_content-item', 'after_click');
    tabs('.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');
    forms(modalState);
});