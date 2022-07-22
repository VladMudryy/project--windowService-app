function tabs() {
    function createTabs(tabTrigger, tabContent, activeClass) {
        const trigger = document.querySelectorAll(tabTrigger),
              tab = document.querySelectorAll(tabContent);

        function hideContent() {
            trigger.forEach(item => {
                item.classList.remove(activeClass);
            });
            tab.forEach(item => {
                item.style.display = 'none';
            });
        }

        function showContent(i = 0) {
            trigger[i].classList.add(activeClass);
            tab[i].style.display = 'block';
        } 
        
        hideContent();
        showContent();

        trigger.forEach((item, i) => {
            item.addEventListener('click', event => {
                event.preventDefault();
                if (event.target.closest('a') || event.target.closest('img')) {
                    hideContent();
                    showContent(i);
                }
            });
        });
    }

    createTabs('.glazing_block', '.glazing_content', 'active');
    createTabs('.decoration_item > div', '.decoration_content-item', 'after_click');
}

export default tabs;