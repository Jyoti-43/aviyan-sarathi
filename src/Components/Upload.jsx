
import React, { useEffect, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const categoriesList = [
  "Political",
  "Social Welfare",
  "Economy",
  "Arts",
  "Cultural and Tradition",
  "Personal Experience",
  "Others",
];

const Upload = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    address: "",
    organization: "",
    title: "",
    video: "",
    category: "",
  });

  const [error, setError] = useState({
    name: "",
    address: "",
    organization: "",
    title: "",
    content: "",
    category: "",
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setError({
      ...error,
      [e.target.name]: e.target.value ? "" : "Required Field",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //  username ma value set garxa
    navigate("/", { uploadedContent: input });
    setInput("");
    try {
      const response = await axios.post("https://localhost:27017/login", input);
      localStorage.setItem("token", response.data.token);

      // Redirect to home after successful login
    } catch (error) {
      console.log(error);
      // Handle login error
    }
  };

  // const handleUpload = () => {
  //   if (selectedFile) {
  //     setSelectedFile(null);
  //     setSelectedCategory(categoriesList[0]);
  //   }
  // };

  return (
    <>
      <header>
        <div className="container text-center">
          <div className="row align-items-center">
            <div className="col">
              <form
                action=""
                method="post"
                onSubmit={handleSubmit}
                className="login-form"
                style={{ width: "60%", margin: "0 auto" }}
              >
                <div className="form_body ">
                  <h2>Welcome, Now you can add stories.</h2>
                  <label style={{ display: "block", textAlign: "left" }}>
                    Full Name
                  </label>
                  <input
                    className="login-input"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Author Full Name "
                    value={input.name}
                    onChange={handleChange}
                    required
                  />
                  <label style={{ display: "block", textAlign: "left" }}>
                    Address
                  </label>
                  <input
                    className="login-input"
                    type="text"
                    id="address"
                    name="address"
                    placeholder="Address"
                    value={input.address}
                    onChange={handleChange}
                    required
                  />
                  <label style={{ display: "block", textAlign: "left" }}>
                    Organization Name
                  </label>
                  <input
                    className="login-input"
                    type="text"
                    id="organization"
                    name="organization"
                    placeholder="Organization Name"
                    value={input.organization}
                    onChange={handleChange}
                  />
                  <label style={{ display: "block", textAlign: "left" }}>
                    Title
                  </label>
                  <input
                    className="login-input"
                    type="title"
                    id="title"
                    name="title"
                    placeholder="title "
                    value={input.title}
                    onChange={handleChange}
                    required
                  />
                  <label style={{ display: "block", textAlign: "left" }}>
                    Add Video
                  </label>
                  <input
                    className="login-input"
                    type="video
                    "
                    id="video"
                    name="video"
                    placeholder="video"
                    value={input.content}
                    onChange={handleChange}
                    required
                  />

                  <div>
                    <label style={{ display: "block", textAlign: "left" }}>
                      Select Category
                    </label>
                    <select
                      className="login-input"
                      name="category"
                      value={input.category}
                      onChange={handleChange}
                      required
                      style={{ display: "block", textAlign: "left" }}
                    >
                      <option value="">Select Category</option>
                      {categoriesList.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                    {error.category && (
                      <p className="error">{error.category}</p>
                    )}
                  </div>
                  <label style={{ display: "block", textAlign: "left" }}>
                    Add Description
                  </label>
                  <div className="input-login">
                    <CKEditor
                      editor={ClassicEditor}
                      data="<p>Add the discription about author and video here..</p>"
                      onReady={(editor) => {
                        // You can store the "editor" and use when it is needed.
                        console.log("Editor is ready to use!", editor);
                      }}
                      onChange={(event) => {
                        console.log(event);
                      }}
                      onBlur={(event, editor) => {
                        console.log("Blur.", editor);
                      }}
                      onFocus={(event, editor) => {
                        console.log("Focus.", editor);
                      }}
                      value={input.content}
                    />
                  </div>

                  <div className="row  align-items-center">
                    <div className="col">
                      <Link to="/">
                        <button
                          type="submit"
                          onClick={Upload}
                          className="login-btn"
                        >
                          Upload
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Upload;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Upload = () => {
//   const navigate = useNavigate();
//   const [input, setInput] = useState({
//     authorFullName: "",
//     address: "",
//     organization: "",
//     title: "",
//     video: "",
//     category: "",
//     Content:""
   
//   });

//   const handleChange = (e) => {
//     setInput({
//       ...input,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // useEffect(() => {
//   //   // Check if user is already logged in
//   //   const token = localStorage.getItem("login");
//   //   //if user is not logged in back to login page
//   //   if (token) {
//   //     console.log(token);
//   //     // navigate('/login')
//   //   }
//   // }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // Perform upload logic
//     axios
//       .post("http://localhost:3000/video")
//       .then((request) => {
//         console.log(request.data);
//         setInput(request.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//     // Redirect to home after successful upload and pass the uploaded content in the state
//     navigate("/", { uploadedContent: input });
//   };

//   return (
//     <header>
//       {/* Upload form JSX */}
//       <form onSubmit={handleSubmit}>
//         <div className="container text-center">
//           <div className="row align-items-center">
//             <div className="col">
//               <form
//                 action=""
//                 method="post"
//                 onSubmit={handleSubmit}
//                 className="login-form"
//                 style={{ width: "60%", margin: "0 auto" }}
//               >
//                 <div className="form_body ">
//                   <h2>Welcome, Now you can add stories.</h2>
//                   <label style={{ display: "block", textAlign: "left" }}>
//                     Full Name
//                   </label>
//                   <input
//                     className="login-input"
//                     type="text"
//                     id="name"
//                     name="name"
//                     placeholder="Author Full Name "
//                     value={input.name}
//                     onChange={handleChange}
//                     required
//                   />
//                   <label style={{ display: "block", textAlign: "left" }}>
//                     Address
//                   </label>
//                   <input
//                     className="login-input"
//                     type="text"
//                     id="address"
//                     name="address"
//                     placeholder="Address"
//                     value={input.address}
//                     onChange={handleChange}
//                     required
//                   />
//                   <label style={{ display: "block", textAlign: "left" }}>
//                     Organization Name
//                   </label>
//                   <input
//                     className="login-input"
//                     type="text"
//                     id="organization"
//                     name="organization"
//                     placeholder="Organization Name"
//                     value={input.organization}
//                     onChange={handleChange}
//                   />
//                   <label style={{ display: "block", textAlign: "left" }}>
//                     Title
//                   </label>
//                   <input
//                     className="login-input"
//                     type="title"
//                     id="title"
//                     name="title"
//                     placeholder="title "
//                     value={input.title}
//                     onChange={handleChange}
//                     required
//                   />
//                   <label style={{ display: "block", textAlign: "left" }}>
//                     Add Video
//                   </label>
//                   <input
//                     className="login-input"
//                     type="content"
//                     id="content"
//                     name="content"
//                     placeholder="content"
//                     value={input.content}
//                     onChange={handleChange}
//                     required
//                   />

//                   <div>
//                     <label style={{ display: "block", textAlign: "left" }}>
//                       Select Category
//                     </label>
//                     <select
//                       className="login-input"
//                       name="category"
//                       value={input.category}
//                       onChange={handleChange}
//                       required
//                       style={{ display: "block", textAlign: "left" }}
//                     >
//                       <option value="">Select Category</option>
//                       {categoriesList.map((category) => (
//                         <option key={category} value={category}>
//                           {category}
//                         </option>
//                       ))}
//                     </select>
//                     {/* {error.category && (
//                       <p className="error">{error.category}</p>
//                     )} */}
//                   </div>
//                   <label style={{ display: "block", textAlign: "left" }}>
//                     Add Description
//                   </label>
//                   <div className="input-login">
//                     <CKEditor
//                       name="description"
//                       editor={ClassicEditor}
//                       data="<p>Add the discription about author and video here..</p>"
//                       onReady={(editor) => {
//                         // You can store the "editor" and use when it is needed.
//                         console.log("Editor is ready to use!", editor);
//                       }}
//                       onChange={(event) => {
//                         console.log(event);
//                       }}
//                       onBlur={(event, editor) => {
//                         console.log("Blur.", editor);
//                       }}
//                       onFocus={(event, editor) => {
//                         console.log("Focus.", editor);
//                       }}
//                       value={input.content}
//                     />
//                   </div>

//                   <div className="row  align-items-center">
//                     <div className="col">
//                       <button type="submit">Upload</button>
//                     </div>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </form>
//     </header>
//   );
// };

// export default Upload;




// import React, { useState } from 'react';
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

// import Categories from './Categories';

// const categoriesList = [
//   'Political',
//   'Social Welfare',
//   'Economy',
//   'Arts',
//   'Cultural and Tradition',
//   'Personal Experience',
//   'Others'
// ];

// const Upload = ({ onUpload }) => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [selectedCategory, setSelectedCategory] = useState(categoriesList[0]);

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const handleCategoryChange = (category) => {
//     setSelectedCategory(category);
//   };

//   const handleUpload = () => {
//     if (selectedFile) {
//       onUpload({
//         file: selectedFile,
//         category: selectedCategory,
//       });
//       setSelectedFile(null);
//       setSelectedCategory(categoriesList[0]);
//     }
//   };

//   return (
//     <div>
//       <h1>Upload Video</h1>
//       <input type="file" onChange={handleFileChange} />
//       <Categories
//         categories={categoriesList}
//         selectedCategory={selectedCategory}
//         onCategoryChange={handleCategoryChange}
//       />

// <CKEditor
//                     editor={ ClassicEditor }
//                     data="<p>Hello from CKEditor&nbsp;5!</p>"
//                     onReady={ editor => {
//                         // You can store the "editor" and use when it is needed.
//                         console.log( 'Editor is ready to use!', editor );
//                     } }
//                     onChange={ ( event ) => {
//                         console.log( event );
//                     } }
//                     onBlur={ ( event, editor ) => {
//                         console.log( 'Blur.', editor );
//                     } }
//                     onFocus={ ( event, editor ) => {
//                         console.log( 'Focus.', editor );
//                     } }
//                 />

//       <button onClick={handleUpload}>Upload</button>
//     </div>
//   );
// };

// export default Upload;




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
