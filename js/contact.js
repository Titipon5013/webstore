document.addEventListener('DOMContentLoaded', function() {
    function initMap() {
        const shopLocation = { lat: -34.397, lng: 150.644 };
        const map = new google.maps.Map(document.getElementById('map'), {
            zoom: 8,
            center: shopLocation
        });
        const marker = new google.maps.Marker({
            position: shopLocation,
            map: map
        });
    }

    initMap();

    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        // Handle form submission
        alert('Your message has been sent!');
        form.reset();
    });
});
