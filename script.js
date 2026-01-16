// Aspetta che il documento sia completamente caricato
document.addEventListener('DOMContentLoaded', () => {

    // Seleziona gli elementi del menu
    const hamburger = document.getElementById('hamburger');
    const navList = document.getElementById('nav-list');

    // Aggiungi un ascoltatore per il click sull'hamburger
    hamburger.addEventListener('click', () => {
        // Aggiungi o rimuovi la classe 'active' alla lista di navigazione
        navList.classList.toggle('active');
    });

    // Opzionale: Chiudi il menu quando si clicca su un link
    const navLinks = document.querySelectorAll('.nav-list li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('active');
        });
    });

    // COOKIE BANNER
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptCookiesBtn = document.getElementById('accept-cookies');

    // Controlla se l'utente ha già accettato i cookie
    if (!localStorage.getItem('cookiesAccepted')) {
        cookieBanner.classList.add('show');
    }

    // Gestisci il click sul pulsante "Accetta"
    acceptCookiesBtn.addEventListener('click', () => {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieBanner.classList.remove('show');
    });

    // TIMELINE ANIMATION
    const timelineItems = document.querySelectorAll('.timeline-item');

    function checkTimelineItems() {
        const triggerBottom = window.innerHeight / 5 * 4;

        timelineItems.forEach((item, index) => {
            const itemTop = item.getBoundingClientRect().top;

            if (itemTop < triggerBottom) {
                // Add a delay based on index for staggered animation
                setTimeout(() => {
                    item.classList.add('visible');
                }, index * 200);
            }
        });
    }

    // Check on load and scroll
    window.addEventListener('load', checkTimelineItems);
    window.addEventListener('scroll', checkTimelineItems);
});
