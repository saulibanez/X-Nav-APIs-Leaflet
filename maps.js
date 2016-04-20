$(document).ready(function() {

    var latitud = 40.2838;
    var longitud = -3.8215;

    /* página de referencia: http://leafletjs.com/examples/quick-start.html */
    /* crea el centro del mapa */
    var map = L.map('map').setView([latitud, longitud], 13);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([latitud, longitud]).addTo(map)
        .bindPopup('Localizado')
        .openPopup();

    var circle = L.circle([latitud, longitud], 500, {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5
    }).addTo(map);


    /* pagina de referencia para móvil: http://leafletjs.com/examples/mobile.html */
    var map = L.map('map2');
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18
    }).addTo(map);

    map.locate({setView: true, maxZoom: 16});

    function onLocationFound(e) {
      var radius = e.accuracy / 2;
      L.marker(e.latlng).addTo(map).bindPopup("You are within " + radius + " meters from this point").openPopup();
      L.circle(e.latlng, radius).addTo(map);
    }

    map.on('locationfound', onLocationFound);

    function onLocationError(e) {
      alert(e.message);
    }
    map.on('locationerror', onLocationError);

    var popup = L.popup();
    function onMapClick(e) {
       var coor = e.latlng;
       console.log(coor);
       popup.setLatLng(e.latlng).setContent("Ubicación: " + e.latlng.toString()).openOn(map);
       var circle = L.circle(coor, 500, {
           color: 'red',
           fillColor: '#f03',
           fillOpacity: 0.5
       }).addTo(map);
    }
    map.on('click', onMapClick);

});