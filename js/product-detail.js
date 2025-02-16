document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('product');
    const products = [
        // Add product data here
        { id: 1, name: 'Product 1', price: 19.99, image: 'images/product1.jpg', description: 'Description of Product 1', attributes: ['Color', 'Size'] },
        // ...more products...
    ];

    function renderProductDetail() {
        const product = products.find(p => p.id == productId);
        const productDetail = document.getElementById('product-detail');
        productDetail.innerHTML = `
            <div class="row">
                <div class="col-md-6">
                    <img src="${product.image}" class="img-fluid" alt="${product.name}">
                </div>
                <div class="col-md-6">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <p>$${product.price.toFixed(2)}</p>
                    <form id="add-to-basket-form">
                        ${product.attributes.map(attr => `
                            <div class="form-group">
                                <label for="${attr.toLowerCase()}">${attr}</label>
                                <input type="text" class="form-control" id="${attr.toLowerCase()}" name="${attr.toLowerCase()}">
                            </div>
                        `).join('')}
                        <div class="form-group">
                            <label for="quantity">Quantity</label>
                            <input type="number" class="form-control" id="quantity" name="quantity" value="1" min="1">
                        </div>
                        <button type="submit" class="btn btn-primary">Add to Basket</button>
                    </form>
                </div>
            </div>
        `;

        document.getElementById('add-to-basket-form').addEventListener('submit', function(event) {
            event.preventDefault();
            // Handle adding to basket
            alert('Product added to basket!');
        });
    }

    renderProductDetail();
});
