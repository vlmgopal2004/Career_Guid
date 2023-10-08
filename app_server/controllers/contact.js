const Contact = require('../../app_api/models/contact')

const contact = async (req, res) => {
    console.log("fine");
  
    try {
      // Log the request body to check if 'contactNo' is being sent
      console.log('Request Body:', req.body);
  
      // Create a new contact using the Contact model
      const newContact = new Contact({
        name: req.body.name,
        technology: req.body.technology,
        contactNo: req.body.contactNo, // Corrected field name here
        email: req.body.email,
      });
  
      // Save the new contact to the database
      await newContact.save();
  
      console.log('Contact saved successfully.');
      res.render('index', { title: 'Thank you for your interest in learning. We will contact you soon' });
    } catch (err) {
      console.error('Error creating contact:', err);
      // Handle the error (e.g., send an error response)
      res.status(500).json({ error: 'Failed to create contact' });
    }
  };
  
  module.exports = {
    contact,
  };