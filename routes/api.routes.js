const router = require("express").Router();
const Place = require("../models/place.js");

router.get('/', (req, res) => {
    Place.find()
        .then((places) => res.json(places))

})


router.get('/:id', (req, res) => {

    const id = req.params.id

    Place.findById(id)
        .then((place) => res.json(place))

})





module.exports = router;