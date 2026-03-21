const express = require("express");
const router = express.Router({mergeParams: true});  
// merge params give access to trace the id of parent route (/listings/:id/reviews) which have id of listing (:id => listing._id).

const Listing = require("../models/listing");  // import Listing from listing.js    
const wrapAsync = require("../utils/wrapAsync.js");
// const ExpressError = require("../utils/ExpressError.js");
// const {reviewSchema} = require("../schema.js");
const Review = require("../models/review.js"); 
const {isLoggedIn,isReviewAuthor, validateReview} = require("../middleware.js");
const reviewController = require("../controllers/reviews.js");


// Review Route

// Post route : post reviews
router.post("/" , isLoggedIn, validateReview, wrapAsync(reviewController.createReview));

// Delete Review Route
router.delete("/:reviewId" , isLoggedIn, isReviewAuthor, wrapAsync(reviewController.deleteReview));

module.exports = router;
