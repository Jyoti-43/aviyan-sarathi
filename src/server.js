// server.js

const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const Video = require('./models/Video');

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/youtube_videos', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define routes
app.get('/api/videos', async (req, res) => {
  try {
    const videos = await Video.find();
    res.json(videos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

app.post('/api/videos', async (req, res) => {
  try {
    // You'll need to implement logic here to fetch YouTube video data
    // from the YouTube API and save it to the database
    // For simplicity, let's assume you have a function fetchVideosFromYouTube() to do this.
    const videosFromYouTube = await fetchVideosFromYouTube(youtu.be/qEB4Jjmfjhk);
    
    // Save fetched videos to MongoDB
    const savedVideos = await Video.create(videosFromYouTube);
    res.json(savedVideos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
