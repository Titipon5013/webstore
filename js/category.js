document.addEventListener('DOMContentLoaded', function() {
    if (!localStorage.getItem('userLoggedIn')) {
        alert('You must be logged in to view products.');
        window.location.href = 'login.html';
        return;
    }

    const urlParams = new URLSearchParams(window.location.search);
    const categoryId = urlParams.get('category');
    const products = [
        // Add product data here
        { id: 1, name: 'Product 1', price: 19.99, image: 'images/product1.jpg', category: 1 },
        // ...more products...
    ];

    function renderCategoryProducts() {
        const categoryProductList = document.getElementById('category-product-list');
        categoryProductList.innerHTML = '';

        products.filter(product => product.category == categoryId).forEach(product => {
            const productCard = `
                <div class="col-md-4">
                    <div class="card">
                        <img src="${product.image}" class="card-img-top" alt="${product.name}">
                        <div class="card-body">
                            <h5 class="card-title">${product.name}</h5>
                            <p class="card-text">$${product.price.toFixed(2)}</p>
                            <a href="product-detail.html?product=${product.id}" class="btn btn-primary">View Details</a>
                        </div>
                    </div>
                </div>
            `;
            categoryProductList.insertAdjacentHTML('beforeend', productCard);
        });
    }

    renderCategoryProducts();
});
