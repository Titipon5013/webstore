document.addEventListener('DOMContentLoaded', function() {
    const products = [
        { id: 1, name: 'Product 1', price: 19.99, image: 'images/product1.jpg' },
        // ...more products...
    ];

    function renderProducts() {
        const productList = document.getElementById('product-list');
        productList.innerHTML = '';

        products.forEach(product => {
            const productCard = `
                <div class="col-md-4 mb-4">
                    <div class="card h-100 shadow-sm">
                        <img src="${product.image}" class="card-img-top" alt="${product.name}">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title">${product.name}</h5>
                            <p class="card-text flex-grow-1">$${product.price.toFixed(2)}</p>
                            <a href="product-detail.html?product=${product.id}" class="btn btn-primary">View Details</a>
                        </div>
                    </div>
                </div>
            `;
            productList.insertAdjacentHTML('beforeend', productCard);
        });
    }

    renderProducts();
});
