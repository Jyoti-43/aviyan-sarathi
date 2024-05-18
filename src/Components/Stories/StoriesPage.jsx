import React from 'react';

const Stories = ({ videos }) => {
  const categorizedVideos = videos.reduce((acc, video) => {
    if (!acc[video.category]) {
      acc[video.category] = [];
    }
    acc[video.category].push(video);
    return acc;
  }, {});

  return (
    <div>
      <h1>Stories</h1>
      {Object.keys(categorizedVideos).map((category) => (
        <div key={category}>
          <h2>{category}</h2>
          <ul>
            {categorizedVideos[category].map((video, index) => (
              <li key={index}>
                {video.file.name}
                {/* You can also display a video player here */}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Stories;

