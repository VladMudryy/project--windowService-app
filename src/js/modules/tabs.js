function tabs() {
    function createTabs(tabTrigger, tabContent, activeClass) {
        const trigger = document.querySelectorAll(tabTrigger),
              tab = document.querySelectorAll(tabContent);

        function removeActeiveClass(active) {
            trigger.forEach(item => {
                item.classList.remove(active);
            });
            tab.forEach(item => {
                item.style.display = 'none';
            });
        }

        trigger.forEach((item, i) => {
            item.addEventListener('click', event => {
                event.preventDefault();
                if (event.target.closest('a') || event.target.closest('img')) {
                    removeActeiveClass(activeClass);
                    item.classList.add(activeClass);
                    tab.forEach((item, j) => {
                        if (j === i) {
                            item.style.display = 'block';
                        }
                    });
                }
            });
        });
    }

    createTabs('.glazing_block', '.glazing_content', 'active');
    createTabs('.decoration_item > div', '.decoration_content-item', 'after_click');
}

export default tabs;