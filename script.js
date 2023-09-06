function search(){ 
const status = document.querySelector('#status');

//test status (permisson,support)
  if(!navigator.geolocation) {
    status.textContent = "error:unsupported device";
  } else {
    status.textContent = 'locating...';
    navigator.geolocation.getCurrentPosition(success, error);
  }

//get real specific coords
  function success(position) {
    var latitude0  = position.coords.latitude;
    var longitude0 = position.coords.longitude;
    status.style.display = 'none';
    otherdetails();
    document.getElementById("latitude").textContent = `latitude: `+latitude0;
    document.getElementById("longitude").textContent = `longitude: `+longitude0;
  }
  function error() {
    status.textContent = 'error: unknown cause';
  }


//get others details
  function otherdetails(){
    jQuery.get('https://api.ipdata.co/?api-key=07dc406357116374356d47dede913d40d6a808b446efaf858c4907d6', function(data){
      var info = {
        'ipAdressI' : data.ip,
        'ispI' : data.asn.name,
        'countryI' : data.continent_name,
        'currencyI' : data.currency.code,
        'placeI' : data.country_name,
        'callCodeI' : data.calling_code,
        'emojyI' : data.emoji_flag,
        'torI' : data.threat.is_tor,
        'proxyI' : data.threat.is_proxy,
        //+
        'latitudeI' : latitude.innerText.slice(11),
        'longitudeI' : longitude.innerText.slice(12)
      }
      document.getElementById("ip").textContent = `ip: `+ info['ipAdressI'];
      document.getElementById("isp").textContent = `isp: `+ info['ispI'];
      document.getElementById("country").textContent = `country: `+ info['countryI'];
      document.getElementById("currency").textContent = `currency: `+ info['currencyI'];
      document.getElementById("place").textContent = `place: `+ info['placeI'];
      document.getElementById("callcode").textContent = `call code: +`+ info['callCodeI'];
      document.getElementById("emoji").textContent = `country emoji: `+ info['emojyI'];
      document.getElementById("tor").textContent = `tor: `+ info['torI'];
      document.getElementById("proxy").textContent = `proxy: `+ info['proxyI'];

      console.log(info);
    })
  }
  if (window.innerWidth > 700) {
    document.querySelector('.start').style.display='none';
    document.querySelector('.back').style.height='19rem';
    }
}
document.querySelector('.start_button').addEventListener('click',search);