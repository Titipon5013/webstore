document.addEventListener('DOMContentLoaded', function() {
    if (!localStorage.getItem('userLoggedIn')) {
        alert('You must be logged in to view all products.');
        window.location.href = 'login.html';
        return;
    }

    const productsPerPage = 15;
    let currentPage = 1;
    const products = [
        // Add product data here
        { id: 1, name: 'Product 1', price: 19.99, image: 'images/product1.jpg' },
        // ...more products...
    ];

    function renderProducts(page) {
        const start = (page - 1) * productsPerPage;
        const end = start + productsPerPage;
        const productList = document.getElementById('product-list');
        productList.innerHTML = '';

        products.slice(start, end).forEach(product => {
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
            productList.insertAdjacentHTML('beforeend', productCard);
        });
    }

    function renderPagination() {
        const pageCount = Math.ceil(products.length / productsPerPage);
        const pagination = document.querySelector('.pagination');
        pagination.innerHTML = '';

        for (let i = 1; i <= pageCount; i++) {
            const pageItem = `
                <li class="page-item ${i === currentPage ? 'active' : ''}">
                    <a class="page-link" href="#">${i}</a>
                </li>
            `;
            pagination.insertAdjacentHTML('beforeend', pageItem);
        }

        document.querySelectorAll('.page-link').forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                currentPage = parseInt(this.textContent);
                renderProducts(currentPage);
                renderPagination();
            });
        });
    }

    renderProducts(currentPage);
    renderPagination();
});
