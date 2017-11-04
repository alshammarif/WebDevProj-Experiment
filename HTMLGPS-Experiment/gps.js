var bb = document.getElementById("gps-loc");
var info = document.getElementById("info");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition);
    } else { 
        info.innerHTML = "Geolocation is not supported by this browser.";}
    }
    
function showPosition(position) {
    info.innerHTML="Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
}

bb.onclick(getLocation());