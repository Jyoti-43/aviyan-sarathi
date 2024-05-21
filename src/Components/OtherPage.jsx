import React, { useEffect, useState } from 'react';
import postData from './data.json';
import ReactPlayer from 'react-player';



const Others = () => {
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    setPosts(postData);
  }, []);







  return (
    <>
      <section class="category-section">
        <div class="container" data-aos="fade-up">

          <div class="section-header d-flex justify-content-between align-items-center mb-5">
            <span><h2>Others</h2></span>
            <div>

            </div>
          </div>

          <div class="row">
            <div class="col-md-12 ">
              {/* yo div ma hamro video with additional content   (data fetch garnu parne thau) */}
             
                <div class="d-lg-flex post-entry-2">

                  <div class="me-3 thumbnail mb-4 mb-lg-0 d-inline-block">
                    <ReactPlayer
                      url="https://youtu.be/mrW-Fam4Rlg?si=uHWGlY-rZ5kHG6w6"
                      width="87%"
                      height="87%"
                      controls
                    />
                    {/* <img src="assets/img/post-landscape-6.jpg" alt="" class="img-fluid" /> */}
                  </div>
                  <div>
                    <div class="post-meta"><span class="date"></span> <span class="mx-1"> </span> </div>
                    <div class="d-flex align-items-center author">
                      <div class="photo"><img src="assets/img/puranShakya.jpg" alt="" class="img-fluid" /></div>
                      <div class="name">
                        <h3 class="m-0 p-0">Mr. Puran Shakya</h3>
                      </div>
                    </div>
                    <h3 className=" m-0"> Inspirational words from Seniors.</h3>
                    <p>Mr. Puran and Mr. Balaram are looking forward to engage with the younger generation. </p>

                  </div>
                </div>
              
            </div>




          </div>
          <div class="row">
            <div class="col-md-12 ">
              {/* yo div ma hamro video with additional content   (data fetch garnu parne thau) */}
             
                <div class="d-lg-flex post-entry-2">

                  <div class="me-3 thumbnail mb-4 mb-lg-0 d-inline-block">
                    <ReactPlayer
                      url="https://youtu.be/joEqjRKf3Yc?si=rLBfTHDNqorqsS8h"
                      width="99%"
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
                        <h3 class="m-0 p-0">Mr. Balaram Thapa</h3>
                      </div>
                    </div>
                    <h3 className=" m-0"> Nothing is impossible</h3>
                    <p>Nothing is impossible says Mr. Balaram Thapa. Do good and don't worry about anything else. Good deeds always pay off and always be confident about what you do. </p>

                  </div>
                </div>
              
            </div>




          </div>
        </div>
      </section>
    </>
  );
};

export default Others;
