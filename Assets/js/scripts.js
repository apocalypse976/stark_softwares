window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 1 ) { // Adjust the value as needed
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});