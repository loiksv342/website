let currentIndex = [0, 0, 0, 0, 0]; // Tablica do śledzenia aktualnego indeksu dla każdego slidera

moveSlide = (step, sliderIndex)  => {
    const slides = document.querySelectorAll(`.section:nth-child(${sliderIndex + 1}) .slide`);
    const totalSlides = slides.length;
    currentIndex[sliderIndex] = (currentIndex[sliderIndex] + step + totalSlides) % totalSlides;
    document.querySelectorAll(`.section:nth-child(${sliderIndex + 1}) .slider`)[0].style.transform = `translateX(-${currentIndex[sliderIndex] * 25}%)`;
}