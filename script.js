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
});
