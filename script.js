function myMap() {
var mapProp= {
    center:new google.maps.LatLng(59.335762,18.084251),
    zoom: 20,
};
var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}

var marker = new google.maps.Marker({position: {lat:59.334452,lng:18.083143}

});

marker.setMap(map);

var infowindow = new google.maps.InfoWindow({
  content:"Mikaela Gustin Interior"
  });

infowindow.open(map,marker);