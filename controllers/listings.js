const Listing = require("../models/listing");  // import Listing Model from Models/listing.js
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');  
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

// Shows Listings Through index.ejs as we move to "/listings" from "/home" or "/" from routes/listing routes
module.exports.index = async (req, res) => {
    const allListing = await Listing.find({});
    res.render("listings/index", {allListing });
};

// Render New Form to ADD NEW LISTING
module.exports.renderNewForm = async (req, res) => {
    res.render("listings/new");
};

// Shows all listings
module.exports.showListings = async (req, res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id).populate({path:"reviews", populate: {path:"author"},
    }).populate("owner");
    if(!listing){
        req.flash("error", "Listing doesn't Exist");
        return res.redirect("/listings");
    }
    res.render("listings/show", {listing, mapToken: process.env.MAP_TOKEN});
};

// Creates new listing from rendered form
module.exports.createListing = async (req, res, next) => {
    let response = await geocodingClient.forwardGeocode( {
        query: req.body.listing.location,
        limit: 1,
    })
    .send();

    if (!response.body.features.length) {
        req.flash("error", "Invalid location");
        return res.redirect("/listings/new");
    }

    let url = req.file.path;
    let filename = req.file.filename;
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = {url, filename};
    newListing.geometry = response.body.features[0].geometry;
    let savedListing = await newListing.save();
    console.log(savedListing);
    req.flash("success", "New Listing Created");
    res.redirect("/listings"); 
};

// Edits the Showed listing
module.exports.editListing = async (req,res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
        req.flash("error", "Listing doesn't Exist");
        return res.redirect("/listings");
    }
    let originalImageUrl = listing.image.url;
    console.log(originalImageUrl);
    originalImageUrl = originalImageUrl.replace("/upload/", "/upload/w_250,h_150,c_fill/");
    res.render("listings/edit", {listing, originalImageUrl});
};

// Saves edited listing
module.exports.updateListing = async (req, res) => {
    let {id} = req.params;
    let listing = await Listing.findByIdAndUpdate(id, {... req.body.listing}, { new: true, runValidators: true }); 
    // runValidators: true => as mongoDB don't check validation while updating.

    if(typeof req.file !== "undefined"){
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = {url, filename};
        let newSavedListing = await listing.save();
        console.log(newSavedListing);
    }
    
    req.flash("success", "Listing Updated!");
    res.redirect(`/listings/${id}`);
};

// deletes the showed listing
module.exports.deleteListing = async (req, res) => {
    let {id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing Deleted");
    console.log(deletedListing);
    res.redirect("/listings");
};