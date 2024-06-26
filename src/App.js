import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter } from "react-router-dom";

import Layout from "./Layout";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";
import StoryDetails from "./Components/StoryDetails";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login/Login";
import Upload from "./Components/Upload";
import AuthProvider from "./Components/context/AuthProvider";
import RequiredAuth from "./Components/context/RequiredAuth";
import Stories from './Components/StoriesPage'
import Politics from "./Components/Politics";
import Cultural from "./Components/Cultural";
import Others from "./Components/OtherPage";





function App() {
  return (
    <div className="App">
      <AuthProvider>

        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />} >
              <Route index element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/storyDetails" element={<StoryDetails />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/upload" element={<RequiredAuth> <Upload /> </RequiredAuth>} />
              <Route path="/stories" element={<Stories />} />


              <Route path="/stories/politics" element={<Politics />} />
              <Route path="/stories/cultural" element={< Cultural />} />
              <Route path="/stories/others" element={<Others />} />


            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>

      {/* <RoutingFile/>
      <Layout/>  */}
    </div>
  );
}

export default App;




