document.addEventListener('DOMContentLoaded', function() {
    const navbar = `
        <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
            <a class="navbar-brand" href="/">CJStreetwear</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item"><a class="nav-link" href="/">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="/all-products.html">All Products</a></li>
                    <li class="nav-item"><a class="nav-link" href="/category.html?category=1">Category 1</a></li>
                    <li class="nav-item"><a class="nav-link" href="/category.html?category=2">Category 2</a></li>
                    <li class="nav-item"><a class="nav-link" href="/category.html?category=3">Category 3</a></li>
                    <li class="nav-item"><a class="nav-link" href="/category.html?category=4">Category 4</a></li>
                    <li class="nav-item"><a class="nav-link" href="/category.html?category=5">Category 5</a></li>
                    <li class="nav-item"><a class="nav-link" href="/basket.html">Basket</a></li>
                    <li class="nav-item"><a class="nav-link" href="/contact.html">Contact</a></li>
                </ul>
                <form class="form-inline ml-auto">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    `;
    document.getElementById('navbar').innerHTML = navbar;
});
