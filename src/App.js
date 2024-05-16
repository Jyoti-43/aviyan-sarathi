import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter } from "react-router-dom";

import Layout from "./Layout";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";
import StoryDetails from "./Components/StoryDetails";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import Upload from "./Components/Upload";



function App() {
  return (
    <div className="App">
     

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout  />}>
            <Route index element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/storyDetails" element={<StoryDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/upload" element={<Upload />} />

          </Route>
        </Routes>
      </BrowserRouter>

      {/* <RoutingFile/>
      <Layout/>  */}
    </div>
  );
}

export default App;




