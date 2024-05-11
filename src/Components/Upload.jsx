import React, { useState } from 'react';
import axios from 'axios';

const Upload = () => {
  // State to hold form data
  const [videoData, setVideoData] = useState({
    title: '',
    description: '',
    videoFile: null,
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setVideoData((prevState) => ({
      ...prevState,
      [name]: name === 'videoFile' ? files[0] : value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('title', videoData.title);
      formData.append('description', videoData.description);
      formData.append('videoFile', videoData.videoFile);

      // Example endpoint for file upload
      const response = await axios.post('https://example.com/upload-video', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(response.data); // Handle server response as needed

      // Reset form data after successful upload
      setVideoData({
        title: '',
        description: '',
        videoFile: null,
      });
    } catch (error) {
      console.error('Error uploading video:', error);
    }
  };

  return (
    <div>
      <h1>Upload Video</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={videoData.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={videoData.description}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="videoFile">Choose Video:</label>
          <input
            type="file"
            id="videoFile"
            name="videoFile"
            onChange={handleInputChange}
            accept="video/mp4, video/webm"
            required
          />
        </div>
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default Upload;
