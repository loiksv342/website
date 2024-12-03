const navbarToggle = document.querySelector("#navbar-toggle");
const navbarMenu = document.querySelector("#navbar-menu");
const navbarLinksContainer = navbarMenu.querySelector(".navbar-links");

let isNavbarExpanded = navbarToggle.getAttribute("aria-expanded") === "true";

// Funkcja do przełączania widoczności nawigacji
const toggleNavbarVisibility = () => {
    isNavbarExpanded = !isNavbarExpanded;
    navbarToggle.setAttribute("aria-expanded", isNavbarExpanded);
    
    if (isNavbarExpanded) {
        navbarMenu.classList.add("is-active"); 
    } else {
        navbarMenu.classList.remove("is-active");
    }
};

// Kliknięcie na przycisk toggle przełącza widoczność
navbarToggle.addEventListener("click", toggleNavbarVisibility);

// Kliknięcie wewnątrz kontenera linków nie powoduje zamknięcia menu
navbarLinksContainer.addEventListener("click", (e) => e.stopPropagation());

// Kliknięcie na menu zamknie je
navbarMenu.addEventListener("click", toggleNavbarVisibility);
