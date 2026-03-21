const mongoose = require("mongoose");
const { ref } = require("node:process");
const Schema = mongoose.Schema;
const Review = require("./review.js");
const { type } = require("node:os");

// define the basic hotel Information Schema 
const listingSchema = new Schema({
    title:{
        type: String,
        required : true,
    },
    description:{
        type:String,
    },
    image:{
        url:String,
        filename: String,
        
    },
    price:{
        type: Number,
        required : true,
    },
    location:{
        type: String,
        required : true,
    },
    country:{
        type: String,
        required : true,
    },
    reviews:[
        {
            type:Schema.Types.ObjectId,
            ref:"Review",
        },
    ],
    owner : {
        type:Schema.Types.ObjectId,
        ref:"User",
    },
    geometry: {
        type: {
        type: String, // Don't do `{ location: { type: String } }`
        enum: ['Point'], // 'location.type' must be 'Point'
        required: true,
        },
        coordinates: {
        type: [Number],
        required: true,
        }
    }
});


// Mongoose middleware to delete all the reviews after deleting a particular review
listingSchema.post("findOneAndDelete", async (listing) => {
    if(listing){
        await Review.deleteMany({_id: {$in: listing.reviews}});
    } 
});


//created a model for basic hotel listing and stored in Listing variable/ Object.
const Listing = mongoose.model("Listing", listingSchema);

//Exported the Listing Object to app.js (main file).
module.exports = Listing;








