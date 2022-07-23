import './slider';
// import modules
import modal from './modules/modals';
import tabs from './modules/tabs';

window.addEventListener('DOMContentLoaded', () => {
    modal();
    tabs('.glazing_block', '.glazing_content', 'active');
    tabs('.no_click', '.decoration_content-item', 'after_click');
});