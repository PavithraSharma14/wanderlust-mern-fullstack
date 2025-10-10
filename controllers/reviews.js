const Review = require("../models/review");
const Listing = require("../models/listing");

module.exports.createReview = async(req,res) => {
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    newReview.author = req.user._id;
    console.log(newReview.author);
    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();
    console.log(req.body);
    req.flash("success","Review shared successfully!");
    res.redirect(`/listings/${listing._id}`);
};

module.exports.destroyRoute = async(req,res) => {
    let { id,reviewId } = req.params;
    await Listing.findByIdAndUpdate(id,{$pull: {reviews: reviewId}});
    await Review.findByIdAndDelete(reviewId); 
    req.flash("success","Review successfully removed.");
    res.redirect(`/listings/${id}`);
};