function tabs(tabTrigger, tabContent, activeClass, display = 'block') {
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
        tab[i].style.display = display;
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

export default tabs;