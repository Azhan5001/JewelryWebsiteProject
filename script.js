const navbar = document.querySelector('header');
const headerContents = document.querySelectorAll('header *');

if (navbar) {
    const twoPercentScroll = document.documentElement.scrollHeight * 0.025;
    window.addEventListener('scroll', () => {
        if (window.scrollY >= twoPercentScroll) {
            navbar.classList.add('scrolled');
            headerContents.forEach(element => element.classList.add('scrolled'));
        } else {
            navbar.classList.remove('scrolled');
            headerContents.forEach(element => element.classList.remove('scrolled'));
        }
    });
}
