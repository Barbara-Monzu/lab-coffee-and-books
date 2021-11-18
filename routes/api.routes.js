const router = require("express").Router();
const Place = require("../models/place.js");

router.get('/', (req, res) => {
    Place.find()
        .then((allPlaces) => res.json(allPlaces))
        .catch(err => next(err))

})

router.get('/:id', (req, res) => {
    const id = req.params.id

    Place.findById(id)
        .then((placeOfDB) => res.json(placeOfDB))
        .catch(err => next(err))

})

module.exports = router;

