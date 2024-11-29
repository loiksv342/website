function toggleDarkMode() {
    const html = document.documentElement; // Pobieramy <html>
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    // Zmieniamy atrybut data-theme
    html.setAttribute('data-theme', newTheme);
    
    // Zmieniamy obrazek w zależności od motywu
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
}

// Event listener na przycisk przełączania trybu
document.getElementById('toggle-dark-mode').addEventListener('click', toggleDarkMode);

// Ustawiamy początkowy tryb przy ładowaniu strony
setInitialTheme();
