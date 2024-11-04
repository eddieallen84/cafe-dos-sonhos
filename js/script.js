document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('.carousel-item');

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            const targetId = event.currentTarget.getAttribute('href').substring(1);

            sections.forEach(section => {
                if (section.id === targetId) {
                    section.classList.add('active');
                } else {
                    section.classList.remove('active');
                }
            });
        });
    });
});
