let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-slide");

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Auto-slide every 5 seconds
setInterval(nextSlide, 5000);


function scrollLeft() {
    const slider = document.getElementById("brandsSlider");
    slider.scrollBy({ left: -300, behavior: "smooth" });
  }

  function scrollRight() {
    const slider = document.getElementById("brandsSlider");
    slider.scrollBy({ left: 300, behavior: "smooth" });
  }



 function scrollSavings(amount) {
        document.getElementById('savingsGrid').scrollBy({ left: amount, behavior: 'smooth' });
    }