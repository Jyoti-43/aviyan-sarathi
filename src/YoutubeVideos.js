// Components/YouTubeVideos.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function YouTubeVideos() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Fetch videos from backend API when component mounts
    const fetchVideos = async () => {
      try {
        const response = await axios.get('/api/videos');
        setVideos(response.data);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div>
      <h1>YouTube Videos</h1>
      <ul>
        {videos.map(video => (
          <li key={video._id}>
            <h3>{video.title}</h3>
            <p>{video.description}</p>
            {/* You can embed YouTube videos here */}
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${video.videoId}`}
              title={video.title}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default YouTubeVideos;
