document.addEventListener('DOMContentLoaded', () => {
    // Elemente auswählen
    const navLinks = document.querySelectorAll('nav a');
    const contentSections = document.querySelectorAll('.content-section');
    const yearSpan = document.getElementById('year');

    // Copyright-Jahr aktualisieren
    const currentYear = new Date().getFullYear();
    if (yearSpan) {
        yearSpan.textContent = currentYear;
    }

    // Funktion zum Anzeigen der richtigen Section und Setzen des aktiven Links
    function showSection(targetId) {
        // Alle Sections ausblenden und 'active'-Klasse von Links entfernen
        contentSections.forEach(section => {
            section.classList.remove('active');
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
        });

        // Ziel-Section finden und anzeigen
        const targetSection = document.querySelector(targetId); // targetId enthält bereits '#'
        if (targetSection) {
            targetSection.classList.add('active');
        }

        // Passenden Navigationslink finden und 'active'-Klasse hinzufügen
        const activeLink = document.querySelector(`nav a[href="${targetId}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }

    // Event Listener für Navigationslinks hinzufügen
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Standard-Linkverhalten verhindern
            const targetId = link.getAttribute('href'); // Holt den href-Wert (z.B. "#about")
            showSection(targetId);

            // Optional: Scrollt zum Anfang des Hauptinhaltsbereichs
             // document.querySelector('main').scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Initial die Startseite anzeigen (wird jetzt durch CSS :active Klasse geregelt)
    // Die erste Section und der erste Link haben bereits die Klasse 'active' im HTML/CSS.
    // Optional: Falls man es rein über JS steuern will:
    // if (navLinks.length > 0 && contentSections.length > 0) {
    //     showSection(navLinks[0].getAttribute('href'));
    // }
});