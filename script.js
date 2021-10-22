
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



  jQuery.get('https://api.ipdata.co/?api-key=07dc406357116374356d47dede913d40d6a808b446efaf858c4907d6', function(data){
    console.log(JSON.stringify(data,null,2));
    var callcode = data.calling_code;
    var Isp = data.asn.name;
    var emojy = data.emoji_flag;
    var ipadress = data.ip;
    var country = data.country_name;
    var continent = data.continent_name;
    var currency = data.currency.code;

    document.getElementById("currency").textContent = `CURRENCY: ${currency}`;
    document.getElementById("emoji").textContent = `COUNTRY EMOJI: ${emojy}`;
    document.getElementById("callcode").textContent = `CALLING CODE: +${callcode}`;
    document.getElementById("isp").textContent = `ISP: ${Isp}`;
    document.getElementById("ip").textContent = `IP: ${ipadress}`;
    document.getElementById("country").textContent = `COUNTRY:  ${continent}, ${country}`;
  })

}
