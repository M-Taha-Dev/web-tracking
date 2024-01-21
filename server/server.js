
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://admin:1234@mernapp.9hkx7ol.mongodb.net/?retryWrites=true&w=majority";
const cors = require('cors');

const express = require('express');
const mongoose = require('mongoose');
const { Tracker } = require('./models/tracking.js'); // Import your MongoDB models
const app = express();
const PORT = process.env.PORT || 5001;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
app.use(cors());

app.use(express.json());

// Create
app.post('/api/trackers', async (req, res) => {
  try {
    const newTracker = await Tracker.create(req.body);
    res.json(newTracker);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Read
app.get('/api/trackers', async (req, res) => {
  try {
    const trackers = await Tracker.find();
    res.json(trackers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update
app.put('/api/trackers/:id', async (req, res) => {
  try {
    const updatedTracker = await Tracker.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedTracker);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete
app.delete('/api/trackers/:id', async (req, res) => {
  try {
    const deletedTracker = await Tracker.findByIdAndDelete(req.params.id);
    res.json(deletedTracker);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
