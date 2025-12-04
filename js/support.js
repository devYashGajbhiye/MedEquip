function loadMobilityProducts() {
    const grid = document.querySelector(".product-grid");
    grid.innerHTML = "";

    const mobilityProducts = products.filter(p => p.category === "support_products");

    mobilityProducts.forEach(p => {
        grid.innerHTML += `
        <div class="product-card">
            <div class="product-img-wrapper">
                <img src="${p.image}" alt="${p.name}">
            </div>
            <p class="p-name">${p.name}</p>
            <p class="price">${p.price}</p>
            <button class="add-btn">Add to cart</button>
        </div>`;
    });
}

window.onload = loadMobilityProducts;
