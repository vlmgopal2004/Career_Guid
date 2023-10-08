// Import the models object from your models module
const Review = require('../../app_api/models/review'); // Adjust the path as needed

const review = async (req, res) => {
    console.log("fine");
  
    try {
      // Create a new review using the Review model
      const createdReview = await Review.create({
        author: req.body.name,
        rating: req.body.rating,
        review: req.body.review,
      });
      
      console.log('Review created successfully.');
      res.render('index', { title: 'We extend our gratitude for your review' });
    } catch (err) {
      console.error('Error creating review:', err);
      // Handle the error (e.g., send an error response)
      res.status(500).json({ error: 'Error creating review' });
    }
  };


  
  module.exports = {
    review,
  };
  