
const placeLatitud = document.querySelector("#latitud").innerHTML
const placeLongitud = document.querySelector("#longitud").innerHTML

// function initMap() {

//     const centerLocation = {
//         lat: placeLatitud,
//         lng: placeLongitud
//     };

//     console.log(centerLocation)

//     const map = new google.maps.Map(document.getElementById('map'), {
//         zoom: 13,
//         center: centerLocation
//     });

//     let center = {
//         lat: undefined,
//         lng: undefined
//     };

//     //createMarker(map)

// }

function createMarker(map, centerLocation) {

    const pin = new google.maps.Marker({
        position: centerLocation,
        map: map,
    });
}

// initMap()

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

