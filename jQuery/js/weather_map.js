mapboxgl.accessToken = MAPBOX_TOKEN;

// Default map on onload
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 4,
    center: [-96.8283, 33.1080]
});

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

// Method to search for coordinates based on a physical address and return
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

// Event listener to capture user input and call weather API
$('#search-input-btn').click(() => {
    const searchInput = $('#search-input').val();
    geocode(searchInput, mapboxgl.accessToken).then((result) => {
        // Set new map from users search
        map.setCenter(result);
        map.setZoom(14);
        // New marker on the map from user input
        let marker = new mapboxgl.Marker({draggable: true})
        .setLngLat([result[0], result[1]])
        .addTo(map);
        let coordinates = marker.getLngLat();   
        // Set map to search location
        let lat = coordinates.lat;
        let lng = coordinates.lng;
        fetchWeather(lat, lng);
    });
});

// Render forecast to the DOM with widgets
const renderWidgets = (cityId) => {
    // Widget element container
    let widgetEl = document.getElementById('widget');
    // Open weather map code to display 5 day forecast widget
    window.myWidgetParam = [];  
    widgetEl.innerHTML = `
        <div id="openweathermap-widget-11"></div>
        <div id="openweathermap-widget-15"></div>
    `;
    window.myWidgetParam.push(
        {
            id: 11,
            cityid: `${cityId}`,
            appid: `${WEATHER_API_TOKEN}`,
            units: 'imperial',
            containerid: 'openweathermap-widget-11',  
        },
        {
            id: 15,
            cityid: `${cityId}`,
            appid: `${WEATHER_API_TOKEN}`,
            units: 'imperial',
            containerid: 'openweathermap-widget-15',  
        }
    );
    
    var script = document.createElement('script');
    script.async = true;
    script.charset = "utf-8";
    script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(script, s);  

    // Open weather map code to display todays forecast widget
    // window.myWidgetParam = [];
    // widgetEl.innerHTML = ``;
    // window.myWidgetParam.push(
       
    // );  
    // var script = document.createElement('script');
    // script.async = true;
    // script.charset = "utf-8";
    // script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
    // var s = document.getElementsByTagName('script')[0];
    // s.parentNode.insertBefore(script, s);  
};
// Open weather map API call
async function fetchWeather(lat, lng) {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&units=imperial&appid=${WEATHER_API_TOKEN}`

    try {
        const response = await fetch(weatherUrl);
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        };
        const data = await response.json();
        renderWidgets(data.city.id);
    } catch (error) {
        console.error(`Could not get data: ${error}`);
    }
}