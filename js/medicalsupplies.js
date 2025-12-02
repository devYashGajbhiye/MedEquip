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
