// 1. Alternador de Temas (Dark/Light)
const themeToggler = document.getElementById('themeToggler');
themeToggler.addEventListener('click', () => {
    const html = document.documentElement;
    const isDark = html.getAttribute('data-bs-theme') === 'dark';
    const newTheme = isDark ? 'light' : 'dark';
    
    html.setAttribute('data-bs-theme', newTheme);
    themeToggler.innerHTML = isDark ? '<i class="bi bi-sun-fill"></i>' : '<i class="bi bi-moon-stars-fill"></i>';
});

// 2. Configuração ScrollReveal (Efeitos de Surgimento)
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '30px',
    duration: 800,
    delay: 100,
    reset: false
});

sr.reveal('.reveal-content');
sr.reveal('.reveal-photo', { scale: 0.85, delay: 300 });
sr.reveal('.reveal-up', { interval: 100 });

// 3. Fechar menu Offcanvas ao clicar num link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const offcanvasElement = document.getElementById('menuMKS');
        const instance = bootstrap.Offcanvas.getInstance(offcanvasElement);
        if(instance) instance.hide();
    });
});

// 4. Scroll Suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
