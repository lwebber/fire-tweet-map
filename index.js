var mymap = L.map('mapid').setView([37.9735346, -122.5310874], 11);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1Ijoid3dlYmJ5MSIsImEiOiJjazI3dWxjd2QxNWhsM2R0Y2gzaDZhYTZ0In0.ank4076W4hJPslV-NAUkNg'
}).addTo(mymap);

var popup = L.popup()
    .setLatLng([37.9735346, -122.5310874])
    .setContent('<p>Hello world!<br />This is a nice popup.</p>')
    .openOn(mymap);

L.marker([37.9735346, -122.5310874]).addTo(mymap);