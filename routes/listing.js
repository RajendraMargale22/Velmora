const express = require("express");
const router = express.Router();

const multer  = require('multer');


const Listing = require("../models/listing");  // import Listing from listing.js    
const wrapAsync = require("../utils/wrapAsync.js");
// const ExpressError = require("../utils/ExpressError.js");
// const {listingSchema} = require("../schema.js");
const {isLoggedIn, isOwner, validateListing} = require("../middleware.js");
const listingController = require("../controllers/listings.js");
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage });


//LISTINGS ROUTES

//INDEX AND CREATE ROUTES : 
router.route("/")
.get(wrapAsync(listingController.index)) //INDEX ROUTE
.post(isLoggedIn, validateListing, upload.single('listing[image]'), wrapAsync (listingController.createListing));  //CREATE ROUTE




// NEW LISTING ROUTE : create new Listing form in new.ejs and connect it here using get request 
// show route ke upar rakho q ki listings/new or listings/id ko same samajh raha hai to new ko request pehale bhejne do
//NEW ko ID samj ke DB me dundta hai
router.get("/new" ,isLoggedIn, wrapAsync(listingController.renderNewForm));


// SHOW , UPDATE AND DELETE ROUTES :
router.route("/:id")
.get( wrapAsync(listingController.showListings)) // SHOW ROUTE
.put( isLoggedIn, isOwner, upload.single('listing[image]'), validateListing, wrapAsync(listingController.updateListing)) // UPDATE ROUTE
.delete( isLoggedIn, isOwner, wrapAsync(listingController.deleteListing));  //DELETE ROUTE

// EDIT ROUTE 
router.get("/:id/edit" , isLoggedIn, isOwner, wrapAsync(listingController.editListing));

module.exports = router;