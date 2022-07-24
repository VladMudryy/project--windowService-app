import './slider';
// import modules
import modal from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';

window.addEventListener('DOMContentLoaded', () => {
    modal();
    tabs('.glazing_block', '.glazing_content', 'active');
    tabs('.no_click', '.decoration_content-item', 'after_click');
    forms();
});