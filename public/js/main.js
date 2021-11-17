
function initMap() {
  const centerLocation = {
    lat: 40.41180724800556,
    lng: -3.693385227152134
  };

  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: centerLocation
  });

  let center = {
    lat: undefined,
    lng: undefined
  };

}

function getPlaces(map) {
  axios.get("/api")
    .then(response => {
      placeCreated(map, response.data.restaurants);
    })
    .catch(error => {
      console.log(error);
    })
}


// // public/javascripts/main.js

// function placeCreated(map, restaurants) {
//   const markers = []
//   restaurants.forEach(function (restaurant) {
//     const center = {
//       lat: restaurant.location.coordinates[1],
//       lng: restaurant.location.coordinates[0]
//     };
//     const pin = new google.maps.Marker({
//       position: center,
//       map: map,
//       title: restaurant.name
//     });
//     markers.push(pin);
//   });
// }

// function showPlaces() {
//   return axios.get("/api")
//     .then(response => console.log(response.data))
// }

// let placeLocation = {};
// const placeId = document.querySelector("#id").innerHTML

// function showPlaceId() {
//   return axios.get(`/api/${placeId}`)
//     .then(response => {
//       placeLocation.coordinates = response.data
//       console.log(placeLocation.coordinates)
//     })
// }







// showPlaces()

// function showMap() {

//   const coordenadas = {
//     lat: req.body.longitude,
//     lng: req.body.latitude
//   };


//   const map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 13,
//     center: coordenadas
//   });

//   getRestaurants(map)
//     .then(lugares => {
//       // 7. Instrucciones: Llamar a placeRestaurants pasandoles la info
//       const markers = placeRestaurants(map, lugares)
//     })
//     .catch(error => console.log(error))
// }

// // 6. Instrucciones: Creado y llamado a getRestaurants para recuperar
// //    esa info de la BD
// function getRestaurants() {
//   return axios.get("/restaurants/api")
//     .then(response => response.data.restaurants)
// }



