module.exports.getAboutPage = (req, res) => {
    // Implement logic to render the About Us page (e.g., render a Pug template)
    res.render('about'); // Replace 'about.pug' with your actual Pug template
  };

  module.exports.getContactPage = (req, res) => {
    // Implement logic to render the Contact page (e.g., render a Pug template)
    res.render('contact'); // Replace 'contact.pug' with your actual Pug template
  };


  module.exports.getReview = (req, res) => {
    res.render('review-form', {title: 'Review',});
  };
  


  