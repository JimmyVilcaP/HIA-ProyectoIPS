/* ==========================================================================
   HEALTH INSIGHTS AGENT (HIA) - COMPORTAMIENTO DINÁMICO
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // Menú de Navegación Móvil
    const toggleButton = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (toggleButton && navLinks) {
        toggleButton.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Detección automática y resaltado de pestaña activa
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const links = document.querySelectorAll('.nav-links a');

    links.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});