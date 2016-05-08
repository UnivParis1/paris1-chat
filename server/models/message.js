// Model Message

'use strict';

var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var MessageSchema = new mongoose.Schema({
  room: {
    type: ObjectId,
    ref: 'Room',
    required: true
  },
  owner: {
    type: ObjectId,
    ref: 'User',
    required: true
  },
  text: {
    type: String,
    required: true
  },
  posted: {
    type: Date,
    default: Date.now,
    index: true
  }
});

module.exports = mongoose.model('Message', MessageSchema);