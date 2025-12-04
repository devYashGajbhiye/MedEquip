function searchProducts() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let cards = document.querySelectorAll(".product-card");

    cards.forEach(card => {
        let name = card.getAttribute("data-name").toLowerCase();
        card.style.display = name.includes(input) ? "block" : "none";
    });
}

function filterProducts() {
    let category = document.getElementById("categoryFilter").value;
    let priceRange = document.getElementById("priceFilter").value;

    document.querySelectorAll(".product-card").forEach(card => {
        let cardCategory = card.dataset.category;
        let price = parseInt(card.dataset.price);

        let categoryMatch = (category === "all" || category === cardCategory);

        let priceMatch =
            priceRange === "all" ||
            (priceRange === "0-1000" && price <= 1000) ||
            (priceRange === "1000-5000" && (price >= 1000 && price <= 5000));

        card.style.display = (categoryMatch && priceMatch) ? "block" : "none";
    });
}

// ===== Scroll to Top =====
window.onscroll = function() {
    document.getElementById("toTop").style.display =
        window.scrollY > 300 ? "block" : "none";
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function slideLeft() {
    document.getElementById("productSlider").scrollBy({
        left: -300,
        behavior: "smooth"
    });
}

function slideRight() {
    document.getElementById("productSlider").scrollBy({
        left: 300,
        behavior: "smooth"
    });
}

const mobilityGrid = document.getElementById("mobilityGrid");

// Filter mobility products dynamically
let mobilityProducts = products.filter(product => product.category === "mobility");

// Display only first 8 products
mobilityProducts = mobilityProducts.slice(0, 8);

// Generate HTML for each product
mobilityProducts.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";  // Important: Use the same class from CSS
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h4>${product.name}</h4>
        <p class="price">₹${product.price.toLocaleString()}</p>
        <button class="cart-btn">Add to Cart</button>
    `;
    mobilityGrid.appendChild(card);
});

// Scroll functionality
function scrollMobility(value) {
    mobilityGrid.scrollBy({ left: value, behavior: "smooth" });
}


const surgGrid = document.getElementById("surgGrid");

// Filter surgical instruments dynamically
let surgProducts = products.filter(product => product.category === "surgical");

// Display only first 8 products
surgProducts = surgProducts.slice(0, 8);

// Generate product cards
surgProducts.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card"; 
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h4>${product.name}</h4>
        <p class="price">₹${product.price.toLocaleString()}</p>
        <button class="cart-btn">Add to Cart</button>
    `;
    surgGrid.appendChild(card);
});

// Scroll functionality
function scrollSurg(value) {
    surgGrid.scrollBy({ left: value, behavior: "smooth" });
}


const healthGrid = document.getElementById("healthGrid");

// Filter health & wellness products dynamically
let healthProducts = products.filter(product => product.category === "health_wellness");

// Display only 8
healthProducts = healthProducts.slice(0, 8);

// Generate product cards
healthProducts.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h4>${product.name}</h4>
        <p class="price">₹${product.price.toLocaleString()}</p>
        <button class="cart-btn">Add to Cart</button>
    `;
    healthGrid.appendChild(card);
});

// Scroll functionality
function scrollHealth(value) {
    healthGrid.scrollBy({ left: value, behavior: "smooth" });
}


const personalGrid = document.getElementById("personalGrid");

// Filter personal care products
let personalProducts = products.filter(product => product.category === "personal_care");

// Show only first 8
personalProducts = personalProducts.slice(0, 8);

// Generate product cards
personalProducts.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h4>${product.name}</h4>
        <p class="price">₹${product.price.toLocaleString()}</p>
        <button class="cart-btn">Add to Cart</button>
    `;
    personalGrid.appendChild(card);
});

// Scroll buttons
function scrollPersonal(value) {
    personalGrid.scrollBy({ left: value, behavior: "smooth" });
}

const patientGrid = document.getElementById("patientGrid");

// Filter patient care products dynamically
let patientProducts = products.filter(product => product.category === "patient_care");

// Display only first 8
patientProducts = patientProducts.slice(0, 8);

// Generate product cards
patientProducts.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h4>${product.name}</h4>
        <p class="price">₹${product.price.toLocaleString()}</p>
        <button class="cart-btn">Add to Cart</button>
    `;
    patientGrid.appendChild(card);
});

// Scroll functionality
function scrollPatient(value) {
    patientGrid.scrollBy({ left: value, behavior: "smooth" });
}

const supportGrid = document.getElementById("supportGrid");

// Filter support care products
let supportProducts = products.filter(product => product.category === "support_products");

// Show only first 8
supportProducts = supportProducts.slice(0, 8);

// Generate product cards
supportProducts.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h4>${product.name}</h4>
        <p class="price">₹${product.price.toLocaleString()}</p>
        <button class="cart-btn">Add to Cart</button>
    `;
    supportGrid.appendChild(card);
});

// Scroll functionality
function scrollSupport(value) {
    supportGrid.scrollBy({ left: value, behavior: "smooth" });
}


const ostomyGrid = document.getElementById("ostomyGrid");

// Filter ostomy care products
let ostomyProducts = products.filter(product => product.category === "ostomy_care");

// Show only first 8 items
ostomyProducts = ostomyProducts.slice(0, 8);

// Generate product cards dynamically
ostomyProducts.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h4>${product.name}</h4>
        <p class="price">₹${product.price.toLocaleString()}</p>
        <button class="cart-btn">Add to Cart</button>
    `;
    ostomyGrid.appendChild(card);
});

// Scroll functionality
function scrollOstomy(value) {
    ostomyGrid.scrollBy({ left: value, behavior: "smooth" });
}




