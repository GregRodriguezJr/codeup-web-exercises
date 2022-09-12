"use strict";
    // Map of Dallas
    mapboxgl.accessToken = MAPBOX_TOKEN;
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        zoom: 12,
        center: [-96.8283, 33.1080]
    });

    // Add zoom and rotation controls to the map.
    map.addControl(new mapboxgl.NavigationControl());

    // Array of favorite restaurants objects
    let restaurants = [
        {
            name: "Sushi Marquee &#127843;",
            cuisine: "Japanese",
            phone: "(972)833-1608",
            lng: -96.8283,
            lat: 33.1080
        },
        {
            name: "Fogo de Chao &#129385;",
            cuisine: "Brazilian",
            phone: "(469)606-1000",
            lng: -96.8257,
            lat: 33.0838
        },
        {
            name: "Mexican Sugar &#x1f32e;",
            cuisine: "Mexican",
            phone: "(972)943-0984",
            lng: -96.8234,
            lat: 33.0802
        }
    ]
    
    // Loop to add all markers with popups
    restaurants.forEach((restaurant) => {
        // Destructuring the object
        const { name, cuisine, phone, lng, lat} = restaurant;
        // Create a new marker.
        new mapboxgl.Marker()
        .setLngLat([lng, lat])
        // Add popup
        .setPopup(new mapboxgl.Popup()
        .setHTML(
            `<p>
                ${name}<br>
                ${cuisine} Cuisine<br>
                ${phone}
            </p>`
        ))
        .addTo(map);
    })

/***
 * geocode is a method to search for coordinates based on a physical address and return
 * @param {string} search is the address to search for the geocoded coordinates
 * @param {string} token is your API token for MapBox
 * @returns {Promise} a promise containing the latitude and longitude as a two element array
***/

function geocode(search, token) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
        .then(function(res) {
            return res.json();
        // to get all the data from the request, comment out the following three lines...
        }).then(function(data) {
            return data.features[0].center;
        });
}

// Render coordinates to the DOM
const renderCoordinates = (coordinates) => {
    $('#coordinates-el').html(`
        <h5 class="m-3">
            Longitude:  ${coordinates.lng.toFixed(4)}
        </h5>
        <h5 class="m-3">
            Latitude:  ${coordinates.lat.toFixed(4)}
        </h5>
    `);
};

// New marker on the map from user input
$('#search-btn').click(() => { 
    const searchInput = $('#search-input').val();
    geocode(searchInput, mapboxgl.accessToken).then((result) => {
        map.setCenter(result);
        map.setZoom(14);
        const marker = new mapboxgl.Marker({draggable: true})
        .setLngLat([result[0], result[1]])
        .addTo(map);
        let coordinates = marker.getLngLat();
        renderCoordinates(coordinates);
        // If marker moved, call function to render coordinates to the DOM
        marker.on('dragend', () => {
            coordinates = marker.getLngLat();
            renderCoordinates(coordinates);
        })
    })
});

// Button to hide all markers
$('#hide-markers-btn').click(() => {
    $('.mapboxgl-marker').css('visibility','hidden');
})

// Button to show all markers
$('#show-markers-btn').click(() => {
    $('.mapboxgl-marker').css('visibility','visible');
})

/***
 * reverseGeocode is a method to search for a physical address based on inputted coordinates
 * @param {object} coordinates is an object with properties "lat" and "lng" for latitude and longitude
 * @param {string} token is your API token for MapBox
 * @returns {Promise} a promise containing the string of the closest matching location to the coordinates provided
 *
 * EXAMPLE:
 *
 *  reverseGeocode({lat: 32.77, lng: -96.79}, API_TOKEN_HERE).then(function(results) {
 *      // do something with results
 *  })
 *
 */
function reverseGeocode(coordinates, token) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + coordinates.lng + "," + coordinates.lat + '.json' + "?" + 'access_token=' + token)
        .then(function(res) {
            return res.json();
        })
        // to get all the data from the request, comment out the following three lines...
        .then(function(data) {
            return data.features[0].place_name;
        });
}