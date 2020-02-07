const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: false,
  },
  phone: {
    type: String,
  },
  type: {
    type: String,
    default : 'Personal'
  },
  date: {
    type: Date,
    default: Date.now
  },
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
})
module.exports =  mongoose.model('Contact', ContactSchema);