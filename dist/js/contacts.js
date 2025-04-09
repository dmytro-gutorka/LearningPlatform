document.addEventListener("DOMContentLoaded", function() {
    const statusElement = document.getElementById("status");
    const mapElement = document.getElementById("map");


    const LOCATION = {
        lat: 50.00,
        lng: 36.10
    };


    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                const userLat = position.coords.latitude;
                const userLng = position.coords.longitude;


                showMap(userLat, userLng);
                statusElement.textContent = "Your location is specified on a map";
            },
            function() {
                showMap(LOCATION.lat, LOCATION.lng);
                statusElement.textContent = "Your location...";
            }
        );
    } else {
        showMap(LOCATION.lat, LOCATION.lng);
        statusElement.textContent = "Your browser does not support geolocation";
    }

    function showMap(lat, lng) {
        mapElement.innerHTML = "";

        const iframe = document.createElement("iframe");
        iframe.src = `https://www.openstreetmap.org/export/embed.html?bbox=
        ${lng-0.01}%2C${lat-0.01}%2C${lng+0.01}%2C${lat+0.01}&layer=mapnik&marker=${lat},${lng}`;
        iframe.width = "100%";
        iframe.height = "100%";
        iframe.allowFullscreen = "";

        mapElement.appendChild(iframe);
    }
});