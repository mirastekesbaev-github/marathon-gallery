const slidesPlugin = (activeSLide = 0) => {
    const slides = document.querySelectorAll('.slide');

    slides[activeSLide].classList.add('active')

    const clearActiveClasses = () => {
        slides.forEach((slide) => {
            slide.classList.remove('active')
        })
    }
    
    for (const slide of slides) {
        slide.addEventListener('click', () => {
            clearActiveClasses()
    
            slide.classList.add('active')
        })
    }   
}

slidesPlugin(4) 