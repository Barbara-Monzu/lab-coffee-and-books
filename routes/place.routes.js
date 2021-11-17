const router = require("express").Router();
const Place = require("../models/place.js")


// all your routes here

router.get("/", (req, res, next) => {
  Place.find()
  .then(allPlaces => res.render("places/list-places", { allPlaces }))
  .catch(err => console.log(err))
});

router.get('/crear', (req, res, next) => {
    res.render('places/new-place')
})

router.post('/crear', (req, res, next) => {

  let location = {
		type: 'Point',
		coordinates: [req.body.longitude, req.body.latitude]
	}
    const { name, type } = req.body

    const newPlace = new Place ({ name, location, type  })
    newPlace.save()
  .then((place) => {
    res.redirect('/lugares');
  })
  .catch((error) => {
    console.log("----------------------->", error)
    res.render('places/new-place');
  })
});


router.get('/borrar/:id', (req, res, next) => {

  const { id } = req.params;

  Place.findByIdAndDelete(id)
  .then(placeDelete => {
    console.log(placeDelete) 
    res.redirect('/lugares');;
  })

  
  .catch((error) => {
    console.log("-----------------------> Hay un pedazo de error al eliminar una coffeshop", error)
    res.redirect('/lugares');
  })

})


router.get("/editar/:id", (req, res) => {
  const { id } = req.params

  Place.findById(id)
    .then(place => res.render("places/edit-place", place))
    .catch(err => console.log(err))

})

router.post("/editar/:id", (req, res) => {
  const { id } = req.params

  let location = {
		type: 'Point',
		coordinates: [req.body.longitude, req.body.latitude]
	}

  const { name, type } = req.body

  Place.findByIdAndUpdate(id, { name, location, type }, { new: true })
    .then(place => res.redirect('/lugares'))
    .catch(err => console.log(err))
    
})

router.get('/detalles/:id', (req, res, next) => {

  const { id } = req.params;

  Place.findById(id)
  .then(place => {
    console.log(place) 
    res.render('places/details-place', { place });
  })
  
  .catch((error) => {
    console.log("-----------------------> Hay un pedazo de error al eliminar una coffeshop", error)
    res.redirect('/lugares');
  })

    
})




module.exports = router;