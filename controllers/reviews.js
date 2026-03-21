const Listing = require("../models/listing.js");  // import Listing Model from Models/listing.js
const Review = require("../models/review.js"); 


// Creates new Review
module.exports.createReview = async (req,res) =>{
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    console.log(newReview);
    newReview.author = req.user._id;

    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();

    req.flash("success", "New Review Created");
    res.redirect(`/listings/${listing._id}`);
};

// deletes review (creater can delete only)
module.exports.deleteReview = async (req, res) => {
    let {id, reviewId} = req.params;
    let updatedReview = await Listing.findByIdAndUpdate(id, {$pull: {reviews:reviewId}});
    let deletedReview = await Review.findByIdAndDelete(reviewId);

    req.flash("success", "Review Deleted");
    res.redirect(`/listings/${id}`);
};