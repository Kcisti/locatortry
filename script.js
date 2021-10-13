
function geoFindMe() {
  const status = document.querySelector('#status');

  if(!navigator.geolocation) {
    status.textContent = "GEOLOCATION ISN'T SUPPORTED";
  } else {
    status.textContent = 'LOCATING...';
    navigator.geolocation.getCurrentPosition(success, error);
  }

  function success(position) {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;
    status.style.display = 'none';
    document.getElementById("latitude").textContent = `LATITUDE: ${latitude}`;
    document.getElementById("longitude").textContent = `LONGITUDE: ${longitude}`;
  }

  function error() {
    status.textContent = 'ERROR: POSITION NOT FOUND';
  }

  jQuery.get('http://www.geoplugin.net/json.gp', function(data){
    console.log(JSON.stringify(data,null,2));
    var ipadress = data.geoplugin_request;
    var city = data.geoplugin_city;
    var region = data.geoplugin_region;
    var country = data.geoplugin_countryName;
    var continent = data.geoplugin_continentName;
    document.getElementById("ip").textContent = `IP: ${ipadress}`;
    document.getElementById("country").textContent = `COUNTRY: ${continent}, ${country}`;
    document.getElementById("region&city").textContent = `PLACE: ${region}, ${city}`;
  })
}
