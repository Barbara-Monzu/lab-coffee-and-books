
const placeLatitud = document.getElementById("latitud").value
const placeLongitud = document.getElementById("longitud").value


function createMarker(map, centerLocation) {

    const pin = new google.maps.Marker({
        position: centerLocation,
        map: map,
    });
}


function initMap() {

    console.log(placeLatitud, placeLongitud)

    const centerLocation = {
        lat: Number(placeLatitud),
        lng: Number(placeLongitud)
    };

    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: centerLocation
    });

    let center = {
        lat: undefined,
        lng: undefined
    };

    createMarker(map, centerLocation)

}

