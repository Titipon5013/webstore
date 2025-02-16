document.addEventListener('DOMContentLoaded', function() {
    const footer = `
        <footer class="bg-light py-4 mt-5">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <h5>CJStreetwear</h5>
                        <p>© 2023 CJStreetwear. All rights reserved.</p>
                    </div>
                    <div class="col-md-4">
                        <h5>Links</h5>
                        <ul class="list-unstyled">
                            <li><a href="/">Home</a></li>
                            <li><a href="/all-products.html">All Products</a></li>
                            <li><a href="/contact.html">Contact</a></li>
                        </ul>
                    </div>
                    <div class="col-md-4">
                        <h5>Contact Us</h5>
                        <p>Email: info@cjstreetwear.com</p>
                        <p>Phone: +123 456 7890</p>
                    </div>
                </div>
            </div>
        </footer>
    `;
    document.getElementById('footer').innerHTML = footer;
});
