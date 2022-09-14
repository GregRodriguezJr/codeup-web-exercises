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

// Event listener to capture user input
$('.mapboxgl-ctrl-geocoder--input').click(() => {
    let searchInput = $('.mapboxgl-ctrl-geocoder--input').val();
    console.log(searchInput);
})

let lon = -96.8033;
let lat = 32.7778;
const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${WEATHER_API_TOKEN}`

// Render forecast to the DOM with widgets
const renderWidgets = (cityId) => {
    // Open weather map code to display 5 day forecast widget
    window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];  
    window.myWidgetParam.push(
        {
            id: 11,
            cityid: `${cityId}`,
            appid: `${WEATHER_API_TOKEN}`,
            units: 'imperial',
            containerid: 'openweathermap-widget-11',  
        }
    );
    (function() {
        var script = document.createElement('script');
        script.async = true;
        script.charset = "utf-8";
        script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(script, s);  
    })();
    // Open weather map code to display todays forecast widget
    window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];  
    window.myWidgetParam.push(
        {
            id: 15,
            cityid: `${cityId}`,
            appid: `${WEATHER_API_TOKEN}`,
            units: 'imperial',
            containerid: 'openweathermap-widget-15',  
        }
    );  
    (function() {
        var script = document.createElement('script');
        script.async = true;
        script.charset = "utf-8";
        script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(script, s);  
    })();
};
// Open weather map API call
async function fetchWeather() {
    try {
        const response = await fetch(weatherUrl);
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        };
        const data = await response.json();
        const cityId = data.city.id
        const list = data.list;
        let fiveDayList = [];
        // Loop through data to get every 8th object (24hr day)
        for (let i = 0; i < list.length; i += 8) {
            // Push each 24hr object to new array
            fiveDayList.push(list[i]);
        }
        renderWidgets(cityId);
    } catch (error) {
        console.error(`Could not get data: ${error}`);
    }
}
// fetchWeather();