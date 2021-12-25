// initializes the map on the map div
var map = L.map('map').setView([40, 40], 13);

// for the tiles of the map.
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(map);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// adds a marker to the map
const marker = L.marker([40, 40]).addTo(map)
    .openPopup();


// for the Fetching the api for the ip
function getPost() {
    fetch("https://geo.ipify.org/api/v2/country,city?apiKey=at_CPtvLo9kZrCVrEZUHnXdjITo2DHzx&ipAddress")
    .then(response => response.json())
    .then(data => {

        // getting the address, location, timezone and isp from the api and setting it as the inner text of the h6 in the navigation bar.
        document.getElementById("address").innerText = data.ip; 
        document.getElementById("location").innerText = data.location.city;
        document.getElementById("Timezone").innerText = data.location.timezone;
        document.getElementById("isp").innerText = data.isp;

        // getting the latitude and longitude of the current location from the api
        const lat = data.location.lat;
        const lng =  data.location.lng;

        // reassigning the latitude and longititude gotten to the map and marker
        map.setView([lat, lng])
        marker.setLatLng([lat, lng])
    })
}

getPost()

// to get the value of the input and generate it's data and location on the map, so on click of the button it would assign the value inputed into the api url and fetch the data of that location

function handleIpChange(){
    let valueOfInput = document.getElementsByTagName("input")[0].value;

    fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_CPtvLo9kZrCVrEZUHnXdjITo2DHzx&ipAddress=${valueOfInput}`)
    .then(response => response.json())
    .then(data => {
        // getting the address, location, timezone and isp from the api and setting it as the inner text of the h6 in the navigation bar.
        document.getElementById("address").innerText = data.ip; 
        document.getElementById("location").innerText = data.location.city;
        document.getElementById("Timezone").innerText = data.location.timezone;
        document.getElementById("isp").innerText = data.isp;

        // getting the latitude and longitude of the current location from the api
        const lat = data.location.lat;
        const lng =  data.location.lng;

        // reassigning the latitude and longititude gotten to the map and marker
        map.setView([lat, lng])
        marker.setLatLng([lat, lng])
    })
}


 

 
