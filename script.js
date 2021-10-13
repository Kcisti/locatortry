
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

  jQuery.get("https://ipregistry.co", function (data){
    console.log("COUNTRY:" + data.country);
    console.log("IP ADRESS:" + data.ip);
      const country = data.country;
      const ip = data.ip;
      document.getElementById("country").textContent = `COUNTRY: ${country}`;
      document.getElementById("ip").textContent = `IP: ${ip}`;
  },"jsonp")
}
