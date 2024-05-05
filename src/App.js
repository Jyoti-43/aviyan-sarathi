import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./Layout";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";
import StoryDetails from "./Components/StoryDetails"
import YouTubeVideos from "./YoutubeVideos";
import Video from "./video";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/contact" element={<Contact  />} />
            <Route path="/about" element={<About />} />
            <Route path="/storyDetails" element={<StoryDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>

      {/* <RoutingFile/>
      <Layout/> */}
    </div>
  );
}

export default App;
