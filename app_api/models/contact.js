const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  technology: {
    type: String,
    enum: ['artificial-intelligence', 'information-technology', 'data-science', 'cyber-security'],
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
    validate: 
      function (v) {
        // Log the value being validated
        console.log('Validating contactNo:', v);

        return /\d{10}/.test(v);
      },
      message: props => `${props.value} is not a valid 10-digit phone number!`,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
