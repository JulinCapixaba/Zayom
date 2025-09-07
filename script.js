const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const documentHeight = document.body.scrollHeight;

    if (scrollPosition >= documentHeight * 0.9) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});
