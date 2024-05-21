import React from 'react';
import "../index.css"

import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';



const Politics = () => {

  return (
    <div>

      {/*Home Main content area jasma videos hunxa */}
      <section class="category-section">
        <div class="container" data-aos="fade-up">

          <div class="section-header d-flex justify-content-between align-items-center mb-5">
            <span><h2>Politics</h2></span>
            <div>

            </div>
          </div>

          <div class="row">
            <div class="col-md-12 ">
              {/* yo div ma hamro video with additional content   (data fetch garnu parne thau) */}

              <div class="d-lg-flex post-entry-2">

                <div class="me-3 thumbnail mb-4 mb-lg-0 d-inline-block">
                  <ReactPlayer
                    url="https://youtu.be/qEB4Jjmfjhk?si=EOO9HvyJnG4xZSzQ"
                    width="93%"
                    height="87%"
                    controls
                  />
                  {/* <img src="assets/img/post-landscape-6.jpg" alt="" class="img-fluid" /> */}
                </div>
                <div>
                  <div class="post-meta"><span class="date"></span> <span class="mx-1"> </span> </div>
                  <div class="d-flex align-items-center author">
                    <div class="photo"><img src="assets/img/balaramThapa.jpg" alt="" class="img-fluid" /></div>
                    <div class="name">
                      <h3 class="m-0 p-0">Mr. Balaram  Thapa</h3>
                    </div>
                  </div>
                  <h3 className=" m-0">First meeting with Mr. Ganesh Man Shrestha By Mr. Balaram Thapa </h3>
                  <p>Inspirational words said by Mr. Ganesh Man Shrestha are still true . </p>

                </div>
              </div>
              <div class="d-lg-flex post-entry-2">

                <div class="me-3 thumbnail mb-4 mb-lg-0 d-inline-block">
                  <ReactPlayer
                    url="https://youtu.be/Pscz4O_rZJ4?si=AMYm7VzI-ok-hLEI"
                    width="93%"
                    height="87%"
                    controls
                  />
                  {/* <img src="assets/img/post-landscape-6.jpg" alt="" class="img-fluid" /> */}
                </div>
                <div>
                  <div class="post-meta"><span class="date"></span> <span class="mx-1"> </span> </div>
                  <div class="d-flex align-items-center author">
                    <div class="photo"><img src="assets/img/gardenJoshi.png" alt="" class="img-fluid" /></div>
                    <div class="name">
                      <h3 class="m-0 p-0">Mr. Garden Dhoj Joshi</h3>
                    </div>
                  </div>
                  <h3 className=" m-0">Mr. Garden Dhoj Joshi's views on Politics </h3>
                  <p> </p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div >
  )
}

export default Politics







