// Füge dies hinzu, um den Menu-Button zu bearbeiten
document.addEventListener('DOMContentLoaded', function() {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const sidebar = document.querySelector('#sidebar');

  menuBtn.addEventListener('click', function() {
    menuBtn.classList.toggle('active');
    sidebar.classList.toggle('active');
  });

    // Toggle Menü beim Klick auf den Button
    menuBtn.addEventListener('click', function() {
        menuBtn.classList.toggle('active');
        menu.classList.toggle('active');
        overlay.classList.toggle('active');
    });

    // Schließe Menü beim Klick auf den Overlay
    overlay.addEventListener('click', function() {
        closeMenu();
    });

    // Schließe Menü beim Klick auf einen Link
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            closeMenu();
            
            // Entferne active Klasse von allen Links
            menuLinks.forEach(l => l.classList.remove('active'));
            
            // Füge active Klasse zum geklickten Link hinzu
            this.classList.add('active');
        });
    });

    // Schließe Menü bei Escape-Taste
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeMenu();
        }
    });

    // Hilfsfunktion zum Schließen des Menüs
    function closeMenu() {
        menuBtn.classList.remove('active');
        menu.classList.remove('active');
        overlay.classList.remove('active');
    }

    // Setze aktiven Menüpunkt basierend auf aktuellem Pfad
    function setActiveMenuItem() {
        const currentPath = window.location.pathname;
        
        menuLinks.forEach(link => {
            const href = link.getAttribute('href');
            
            // Entferne alle aktiven Klassen zuerst
            link.classList.remove('active');
            
            // Prüfe ob der aktuelle Pfad mit dem Link übereinstimmt
            if (currentPath.includes('filme') && href.includes('#filme')) {
                link.classList.add('active');
            } else if (currentPath.includes('serien') && href.includes('#serien')) {
                link.classList.add('active');
            } else if (currentPath === '/' && href.includes('#home')) {
                link.classList.add('active');
            } else if (currentPath.includes('neu') && href.includes('#neu')) {
                link.classList.add('active');
            }
        });
    }

    // Initialisiere aktiven Menüpunkt
    setActiveMenuItem();
}); 