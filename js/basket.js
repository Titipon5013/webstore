document.addEventListener('DOMContentLoaded', function() {
    if (!localStorage.getItem('userLoggedIn')) {
        alert('You must be logged in to view your basket.');
        window.location.href = 'login.html';
        return;
    }

    const basket = [
        // Add basket data here
        { id: 1, name: 'Product 1', price: 19.99, quantity: 2 },
        // ...more basket items...
    ];

    function renderBasket() {
        const basketList = document.getElementById('basket-list');
        const basketTotal = document.getElementById('basket-total');
        basketList.innerHTML = '';
        let total = 0;

        basket.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            const basketItem = `
                <div class="row">
                    <div class="col-md-6">
                        <h5>${item.name}</h5>
                    </div>
                    <div class="col-md-3">
                        <p>${item.quantity}</p>
                    </div>
                    <div class="col-md-3">
                        <p>$${itemTotal.toFixed(2)}</p>
                    </div>
                </div>
            `;
            basketList.insertAdjacentHTML('beforeend', basketItem);
        });

        basketTotal.textContent = total.toFixed(2);
    }

    document.getElementById('purchase-button').addEventListener('click', function() {
        alert('Purchase completed!');
        basket.length = 0;
        renderBasket();
    });

    renderBasket();
});