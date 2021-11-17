const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const placeSchema = new Schema({
    name: String,
    location: {
    type: {
     type: String
        },
    coordinates: [Number]
          },
    type: {
      type: {
            enum: ["Coffeeshop", "Bookstore"]
        }
    },
},

{
    timestamps: true
    }

);

placeSchema.index({ location: '2dsphere' });

const Place = model("Place", placeSchema);
module.exports = Place;
