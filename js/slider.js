function moveSlide(direction, sliderIndex) {
    const sliders = document.querySelectorAll('.slider');
    
    sliders.forEach((slider, index) => {
        if (index === sliderIndex) {
            const slides = slider.children;
            let currentSlide = parseInt(slider.getAttribute('data-current-slide')) || 0;  // Pobieramy aktualny slajd z atrybutu

            // Oblicz nowy indeks slajdu
            currentSlide += direction;

            // Sprawdź, czy nie przekroczono zakresu
            if (currentSlide < 0) {
                currentSlide = slides.length - 1;
            } else if (currentSlide >= slides.length) {
                currentSlide = 0;
            }

            slider.setAttribute('data-current-slide', currentSlide);

            slider.style.transform = `translateX(-${currentSlide * 100}%)`;
        }
    });
}
