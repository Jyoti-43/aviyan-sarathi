import React, { useState } from 'react';
import Categories from './Categories';

const categoriesList = [
  'Political',
  'Social Welfare',
  'Economy',
  'Arts',
  'Cultural and Tradition',
  'Personal Experience',
  'Others'
];

const Upload = ({ onUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(categoriesList[0]);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleUpload = () => {
    if (selectedFile) {
      onUpload({
        file: selectedFile,
        category: selectedCategory,
      });
      setSelectedFile(null);
      setSelectedCategory(categoriesList[0]);
    }
  };

  return (
    <div>
      <h1>Upload Video</h1>
      <input type="file" onChange={handleFileChange} />
      <Categories
        categories={categoriesList}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default Upload;




// import React, { useState } from 'react';


// const Upload = () => {
  
  
//   // State to hold form data
//   const [videoData, setVideoData] = useState({
//     title: '',
//     description: '',
//     videoFile: null,
//   });

//   // Handle form input changes
//   const handleInputChange = (e) => {
//     const { name, value, files } = e.target;
//     setVideoData((prevState) => ({
//       ...prevState,
//       [name]: name === 'videoFile' ? files[0] : value,
//     }));
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const formData = new FormData();
//       formData.append('title', videoData.title);
//       formData.append('description', videoData.description);
//       formData.append('videoFile', videoData.videoFile);

     

//       console.log(response.data); // Handle server response as needed

//       // Reset form data after successful upload
//       setVideoData({
//         title: '',
//         description: '',
//         videoFile: null,
//       });
//     } catch (error) {
//       console.error('Error uploading video:', error);
//     }
//   };

//   return (

//     <div>
      
//       <h1>Upload Video</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="title">Title:</label>
//           <input
//             type="text"
//             id="title"
//             name="title"
//             value={videoData.title}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="description">Description:</label>
//           <textarea
//             id="description"
//             name="description"
//             value={videoData.description}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="videoFile">Choose Video:</label>
//           <input
//             type="file"
//             id="videoFile"
//             name="videoFile"
//             onChange={handleInputChange}
//             accept="video/mp4, video/webm"
//             required
//           />
//         </div>
//         <button type="submit">Upload</button>
//       </form>
//     </div>
//   );
// };

// export default Upload;
