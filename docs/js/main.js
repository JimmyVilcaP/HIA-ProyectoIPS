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

    // --- NUEVO: Lógica del Lightbox para las imágenes ---
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("expandedImg");
    const captionText = document.getElementById("modalCaption");
    const images = document.querySelectorAll(".zoomable-image");
    const closeBtn = document.querySelector(".close-modal");

    // Verificar si estamos en la página que tiene el modal
    if (modal && modalImg) {
        // Abrir modal al hacer clic en cualquier imagen con la clase
        images.forEach(img => {
            img.addEventListener("click", function() {
                modal.style.display = "block";
                modalImg.src = this.src;
                captionText.innerHTML = this.alt;
                document.body.style.overflow = "hidden"; // Evita que el fondo haga scroll
            });
        });

        // Función para cerrar el modal
        const closeModal = () => {
            modal.style.display = "none";
            document.body.style.overflow = "auto"; // Devuelve el scroll al fondo
        };

        // Cerrar con el botón "X"
        if(closeBtn) {
            closeBtn.addEventListener("click", closeModal);
        }

        // Cerrar al hacer clic en el fondo oscuro (fuera de la imagen)
        modal.addEventListener("click", (e) => {
            if (e.target !== modalImg) {
                closeModal();
            }
        });

        // Cerrar con la tecla Escape
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && modal.style.display === "block") {
                closeModal();
            }
        });
    }
});