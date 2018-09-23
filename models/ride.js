const Schema = require('mongoose').Schema;
const ride = Schema({
  type: {
    type: String,
    trim: true,
    lowercase: true
  },
  user: {
    type: String,
    trim: true,
    lowercase: true
  },
  distance: {
    type: String,
    trim: true,
    lowercase: true
  },
  source: [],
  destination: []
},
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  });

/* global db */
module.exports = db.model('ride', ride);