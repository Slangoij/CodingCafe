// script.js
var map;

function initMap() {
  var seoul = { lat: 37.5642135 ,lng: 127.0016985 };
  var cityHall = {lat: 37.566554, lng: 126.978546};

  new google.maps.Marker({
    position: seoul,
    map: map,
    label: "서울 중심 좌표"
  });  

  var defaultOptions = {
      zoom: 12,
      center: cityHall,
      disableDefaultUI:true,
      zoomControl: true
      };

  map = new google.maps.Map(document.getElementById('map'), defaultOptions);

  var myIcon = new google.maps.MarkerImage("./src/marker_cafecoding_resized.png");
  var marker = new google.maps.Marker({
      position: cityHall,
      map: map,
      icon: myIcon,
  });
}