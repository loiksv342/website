document.addEventListener('DOMContentLoaded', function () {
    // Funkcja przełączania trybu ciemnego/jasnego
    function toggleDarkMode() {
        const html = document.documentElement; // Pobieranie HTML
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        const navbarlinks = document.querySelector(".navbar-links");

        // Zmieniamy tło na gradient w zależności od motywu
        if (newTheme === 'dark') {
            navbarlinks.style.background = '#1C2733'; // Gradient dla ciemnego tła
        } else {
            navbarlinks.style.background = 'linear-gradient(0deg, rgb(255, 255, 255), rgb(202, 202, 202))'; // Gradient dla jasnego tła
        }

        // Zmieniamy atrybut data-theme
        html.setAttribute('data-theme', newTheme);

        // Zamiana obrazka w zależności od motywu
        const themeImage = document.getElementById('theme-image');
        if (newTheme === 'dark') {
            themeImage.src = 'img/dark-theme.png';
        } else {
            themeImage.src = 'img/light-theme.png';
        }
        
        // Zapisujemy wybór w localStorage
        localStorage.setItem('theme', newTheme);
    }

    // Funkcja ustawiająca początkowy tryb na podstawie localStorage
    function setInitialTheme() {
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
        
        // Ustawiamy odpowiedni obrazek
        const themeImage = document.getElementById('theme-image');
        themeImage.src = savedTheme === 'dark' ? 'img/dark-theme.png' : 'img/light-theme.png';

        // Ustawiamy tło nawigacji odpowiednio do zapisanego motywu
        const navbarlinks = document.querySelector(".navbar-links");
        if (savedTheme === 'dark') {
            navbarlinks.style.background = '#1C2733'; // Gradient dla ciemnego tła
        } else {
            navbarlinks.style.background = 'linear-gradient(0deg, rgb(255, 255, 255), rgb(202, 202, 202))'; // Gradient dla jasnego tła
        }
    }

    // Event listener na przycisk przełączania trybu
    document.getElementById('toggle-dark-mode').addEventListener('click', toggleDarkMode);

    // Ustawiamy początkowy tryb przy ładowaniu strony
    setInitialTheme();
});
