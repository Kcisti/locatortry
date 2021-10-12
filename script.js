function geoFindMe() {

  const status = document.querySelector('#status');
  const mapLink = document.querySelector('#map-link');

  mapLink.textContent = '';

  function success(position) {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;
    status.textContent = '';
    var coordinate = mapLink.textContent = `latitude: ${latitude}, longitude: ${longitude}`;
  }

  function error() {
    status.textContent = 'Unable to retrieve your location';
  }

  if(!navigator.geolocation) {
    status.textContent = 'Geolocation is not supported by your browser';
  } else {
    status.textContent = 'locating...';
    navigator.geolocation.getCurrentPosition(success, error);
  }

}
