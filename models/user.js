const Schema = require('mongoose').Schema;
const userSchema = Schema({
  username: {
    type: String,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    trim: true,
    lowercase: true
  },
  contact: {
    type: String,
    trim: true,
    lowercase: true
  },
  email: {
    type: String,
    trim: true,
    lowercase: true
  },
},
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  });

/* global db */
module.exports = db.model('User', userSchema);