// scroll to top of page
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollTopBtn.style.display = "block";
    } 
    else {
        scrollTopBtn.style.display = "none";
    }
};

/* scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}); */

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo(0, 0);  // Scrolls instantly to the top
});