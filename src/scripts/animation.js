(function () {
    "use strict"

    const detectAndAnimate = () => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(element => {
            const isVisible = isElementInViewport(element);
            element.classList.toggle('is-visible', isVisible);
        });
    };
    const isElementInViewport = el => {
        const rect = el.getBoundingClientRect();
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= viewportHeight &&
            rect.right <= viewportWidth
        );
    };
    window.addEventListener('scroll', detectAndAnimate);
    detectAndAnimate();
})()