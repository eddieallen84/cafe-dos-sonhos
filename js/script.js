document.querySelectorAll('.desktop-menu a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        document.querySelector('.carousel-item.active').classList.remove('active');
        document.getElementById(targetId).classList.add('active');
    });
});