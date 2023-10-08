require('dotenv').config()
const express = require('express');
const router = express.Router();
const featuresController = require('../controllers/features');
const ctrlOthers = require('../controllers/others');
const ctrlReview = require('../controllers/review');
const ctrlContact = require('../controllers/contact');
const Review = require('../../app_api/models/review');


// Define routes for the main pages
router.get('/', featuresController.getFeaturesPage);
router.get('/feature', featuresController.getFeatures);
router.get('/feature/1', featuresController.getFeatures1);
router.get('/feature/2', featuresController.getFeatures2);
router.get('/feature/3', featuresController.getFeatures3);
router.get('/feature/4', featuresController.getFeatures4);
router.get('/feature/5', featuresController.getFeatures5);
router.get('/feature/6', featuresController.getFeatures6);
router.get('/feature/7', featuresController.getFeatures7);



// Define routes for about and contact pages
router.get('/about', ctrlOthers.getAboutPage);
router.get('/contact', ctrlOthers.getContactPage);

// Route for adding a review (GET request)
router.get('/review', ctrlOthers.getReview);


router.post('/review', ctrlReview.review);

router.get('/', async (req, res) => {
    try {
      // Fetch all reviews from MongoDB Atlas (assuming 'Review' is your model)
      const reviews = await Review.find();
  
      // Render the 'index.pug' template and pass the reviews data to it
      res.render('reviews', { reviews });
    } catch (error) {
      console.error('Error fetching reviews:', error);
      res.status(500).json({ error: 'Failed to fetch reviews' });
    }
  });

  


router.post('/contact', ctrlContact.contact)

module.exports = router;