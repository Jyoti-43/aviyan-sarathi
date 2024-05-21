import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'
import postData from './culture.json';
import Data from "./others.json";
const StoriesPage = () => {
  const [posts, setPosts] = useState([]);
  const [sortedPosts, setSortedPosts] = useState([]);
  useEffect(() => {
    setPosts(postData);

  }, []);


  useEffect(() => {

    setSortedPosts([...posts].sort((a, b) => new Date(b.date) - new Date(a.date)));

  }, [posts]);
  return (
    <>
      <section class="category-section">
        <div class="container" data-aos="fade-up">

          <div class="section-header d-flex justify-content-between align-items-center mb-5">
            <span><h2> All Stories</h2></span>
            <div>
              <h1 className='latest'>

              </h1>
            </div>
          </div>

          <div class="row">
            <div class="col-md-9 ">
              {/* yo div ma hamro video with additional content   (data fetch garnu parne thau) */}
              <div class="d-lg-flex post-entry-2">

                <div class="me-3 thumbnail mb-4 mb-lg-0 d-inline-block">
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=qEB4Jjmfjhk"
                    width="93%"
                    height="87%"
                    controls
                  />
                  {/* <img src="assets/img/post-landscape-6.jpg" alt="" class="img-fluid" /> */}
                </div>
                <div>
                  <div class="post-meta"><span class="date"></span> <span class="mx-1"> </span> <span></span></div>
                  <div class="d-flex align-items-center author">
                    <div class="photo"><img src="assets/img/balaramThapa.jpg" alt="" class="img-fluid" /></div>
                    <div class="name">
                      <h3 class="m-0 p-0">Mr. Balaram Thapa</h3>
                    </div>
                  </div>
                  <h3 className=" m-0"><Link to="./storyDetails" >Know the Story of First Cycle Traveller from Purva to Mechi.</Link></h3>
                  <p>Mr. Balaram Thapa's remarkable journey began as the first cyclist to traverse the entire nation, marking a significant milestone in his life.</p>

                </div>
              </div>
              {/* div sakinxa */}

              <div class="d-lg-flex post-entry-2">

                <div class="me-3 thumbnail mb-4 mb-lg-0 d-inline-block">
                  <ReactPlayer
                    url="https://youtu.be/OSQumzI8j7s?si=m1GhIP_VhOazSmB6"
                    width="95%"
                    height="87%"
                    controls
                  />

                </div>
                <div >
                  <div class="post-meta"><span class="date"></span> <span class="mx-1"> </span> <span></span></div>
                  <div class="d-flex align-items-center author">
                    <div class="photo"><img src="assets/img/puranShakya.jpg" alt="" class="img-fluid" /></div>
                    <div class="name">
                      <h3 class="m-0 p-0"> Mr. Puran Shakya </h3>
                    </div>
                  </div>

                  <h3 className=" m-0">< Link to="/storyDetails">Born in 1956, Shakya learned traditional painting from Siddhi Muni Shakya (1979 – 1982).."
                  </Link> </h3>
                  <p> He specialized in mineral color mixing and mudras of different deities. </p>

                </div>



              </div>
              <div class="d-lg-flex post-entry-2">

                <div class="me-3 thumbnail mb-4 mb-lg-0 d-inline-block">
                  <ReactPlayer
                    url="https://youtu.be/e1W09RV1Uq8?si=G-A_aK4UZtFmh4HA"
                    width="95%"
                    height="87%"
                    controls
                  />

                </div>
                <div >
                  <div class="post-meta"><span class="date"></span> <span class="mx-1"> </span> <span></span></div>
                  <div class="d-flex align-items-center author">
                    <div class="photo"><img src="assets/img/gardenJoshi.png" alt="" class="img-fluid" /></div>
                    <div class="name">
                      <h3 class="m-0 p-0"> Mr. Garden Dhoj Joshi </h3>
                    </div>
                  </div>

                  <h3 className=" m-0">< Link to="/storyDetails"> Meet Mr. Garden Dhoj Joshi  Sugar Chemical Engineer
                  </Link> </h3>
                  <p> A graduate from a Russian University with a degree in Sugar Chemical Engineering, was among the few individuals to pursue such studies during that period. </p>

                </div>



              </div>

            </div>





          </div>
        </div>
      </section>
    </>
  )
}

export default StoriesPage