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


const cards = document.querySelectorAll(".testimonial-card");

function revealCards() {
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            card.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealCards);
window.addEventListener("load", revealCards);


document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!email || !message) {
        alert("Please fill all required fields.");
        return;
    }

    alert("Your message has been submitted successfully!");
});


const slider = document.getElementById("brandsSlider");

let clone = slider.innerHTML;
slider.innerHTML += clone;

let speed = 1;

function infiniteSlide() {
  slider.scrollLeft += speed;

  if (slider.scrollLeft >= slider.scrollWidth / 2) {
    slider.scrollLeft = 0;
  }

  requestAnimationFrame(infiniteSlide);
}

infiniteSlide();

function goToReview() {
    window.location.href = "review.html"; 
}

function goToContact() {
    window.location.href = "contact.html"
}