// In your review model file (e.g., review.js)
const mongoose = require('mongoose');

// Define the review schema
const reviewSchema = new mongoose.Schema({
  author: String,
  rating: Number,
  review: String
});

// Create the Review model
const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
