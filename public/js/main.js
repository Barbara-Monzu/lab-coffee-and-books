// const placeLatitud = document.getElementById("latitud").value
// const placeLongitud = document.getElementById("longitud").value

function initMap() {

  const ironhackMAD = {
    lat: 40.39279917456607,
    lng: -3.698590505452073,
  };

    const map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
          center: ironhackMAD
      });

    let center = {
        lat: undefined,
        lng: undefined
    };

      getPlaces(map)
      .then(places => placeCreated(map, places))
      .catch(err =>console.log(err))

}
    

function getPlaces() {
  return axios.get("/api").then(response => response.data);
}

  function placeCreated(map, places) {
        const markers = []
        places.forEach(function (place) {
          console.log("hasta aquí todo bien", place)
          const center = {
            lat: place.location.coordinates[1],
            lng: place.location.coordinates[0]
          };
          const pin = new google.maps.Marker({
            position: center,
            map: map,
          });
          markers.push(pin);
        });
        return markers;
      }

// IMPORTANTE! TIENE QUE RETORNAR LO QUE SE ENCUENTRE EN /API

// let placeLocation = {};
// const placeId = document.querySelector("#id").innerHTML

// function showPlaceId() {
//   return axios.get(`/api/${placeId}`)
//     .then(response => {
//       placeLocation.coordinates = response.data
//       console.log(placeLocation.coordinates)
//     })
// }




