import React, { useEffect, useState } from 'react';
import "../index.css"
import axios from 'axios';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import postData from './culture.json';
import Data from './others.json';

const Cultural = () => {

  const [currentDate, setCurrentDate] = useState('');

  const [posts, setPosts] = useState([]);
  const [postFlag, setPostFlag] = useState(false)
  const [data, setData] = useState([])
  const [sortedPosts, setSortedPosts] = useState([])

  useEffect(() => {
    setPosts(postData);
    setData(Data);
  }, []);

  useEffect(() => {

    setSortedPosts([...data].sort((a, b) => new Date(b.date) - new Date(a.date)));

  }, [data]);



  return (
    <div>

      {/*Home Main content area jasma videos hunxa */}
      <section class="category-section">
        <div class="container" data-aos="fade-up">

          <div class="section-header d-flex justify-content-between align-items-center mb-5">
            <span><h2>Cultural</h2></span>
            <div>
              
            </div>
          </div>

          <div class="row">
            <div class="col-md-12 ">
              {/* yo div ma hamro video with additional content   (data fetch garnu parne thau) */}
              <div class="d-lg-flex post-entry-2">

                <div class="me-3 thumbnail mb-4 mb-lg-0 d-inline-block">
                  <ReactPlayer
                    url="https://youtu.be/-l24aSKK2Ew?si=zu6nYbIvy-YyKXjd"
                    width="93%"
                    height="87%"
                    controls
                  />
                  {/* <img src="assets/img/post-landscape-6.jpg" alt="" class="img-fluid" /> */}
                </div>
                <div>
                  <div class="post-meta"><span class="date"></span> <span class="mx-1"> </span> <span>{currentDate}</span></div>
                  <div class="d-flex align-items-center author">
                    <div class="photo"><img src="assets/img/puranShakya.jpg" alt="" class="img-fluid" /></div>
                    <div class="name">
                      <h3 class="m-0 p-0">Mr. Puran Shakya</h3>
                    </div>
                  </div>
                  <h3 className=" m-0"><Link to="./storyDetails" >Advanced Water Tap That Was Beyond Its Era</Link></h3>
                  <p>There was a Stone tap that separated the impure and pure water with an innovative technique.</p>

                </div>
              </div>
              <div class="d-lg-flex post-entry-2">

                <div class="me-3 thumbnail mb-4 mb-lg-0 d-inline-block">
                  <ReactPlayer
                    url="https://youtu.be/vsI2wPuaccM?si=D4r_g2wPKz8px7Ju"
                    width="93%"
                    height="87%"
                    controls
                  />
                  {/* <img src="assets/img/post-landscape-6.jpg" alt="" class="img-fluid" /> */}
                </div>
                <div>
                  <div class="post-meta"><span class="date"></span> <span class="mx-1"> </span> <span>{currentDate}</span></div>
                  <div class="d-flex align-items-center author">
                    <div class="photo"><img src="assets/img/puranShakya.jpg" alt="" class="img-fluid" /></div>
                    <div class="name">
                      <h3 class="m-0 p-0">Mr. Puran Shakya</h3>
                    </div>
                  </div>
                  <h3 className=" m-0"><Link to="./storyDetails" >About Our Historic Temple Architecture</Link></h3>
                  <p>Some talks about our historic luti aajima temple's architecture.</p>

                </div>
              </div>
              <div class="d-lg-flex post-entry-2">

<div class="me-3 thumbnail mb-4 mb-lg-0 d-inline-block">
  <ReactPlayer
    url="https://youtu.be/XIYkiuOdgUE?si=jLijnnwBw36SKRnh"
    width="93%"
    height="87%"
    controls
  />
  {/* <img src="assets/img/post-landscape-6.jpg" alt="" class="img-fluid" /> */}
</div>
<div>
  <div class="post-meta"><span class="date"></span> <span class="mx-1"> </span> <span>{currentDate}</span></div>
  <div class="d-flex align-items-center author">
    <div class="photo"><img src="assets/img/puranShakya.jpg" alt="" class="img-fluid" /></div>
    <div class="name">
      <h3 class="m-0 p-0">Mr. Puran Shakya</h3>
    </div>
  </div>
  <h3 className=" m-0"><Link to="./storyDetails" >Where are those Dhunge Dhara ?? </Link></h3>
  <p>Kathmandu used to have plenty of stone taps with interconnected systems that provided enough water to the residents.</p>

</div>
</div>
            </div>


            {/* <div className="col-md-3">
              <div className="aside-block">

                <div className="tab-content" id="pills-tabContent">
                  <div className="tab-pane fade show active" id="pills-latest" role="tabpanel" aria-labelledby="pills-latest-tab">
                    {/* maping of data */}
                    {/* {sortedPosts.map((post, index) => (
                      <div
                        key={index}
                        className="post-entry-1 border-bottom"
                      // onClick={() => handlePostClick(index)}
                      >
                        <div className="post-meta ">
                          <span className="mx-1"></span>{' '}
                          <span className="date">{post.date}</span>
                        </div>
                        <h2 className="mb-2">
                          <Link to="/storyDetails">{post.title}</Link>
                        </h2>
                        <span className="author mb-3 d-block">{post.author}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div> */}

            {/* </div>  */}

          </div>
        </div>
      </section>


    </div >
  )
}

export default Cultural







