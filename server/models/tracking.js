const mongoose = require('mongoose');

const trackerSchema = new mongoose.Schema({
  id: Number,
  TrackerType: String,
  TrackerStatus: String,
});

const Tracker = mongoose.model('Tracker', trackerSchema);

module.exports = { Tracker };
