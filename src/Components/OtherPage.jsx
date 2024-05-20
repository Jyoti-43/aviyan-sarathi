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
              {posts.map((post, index) => {
                <div class="d-lg-flex post-entry-2">

                  <div class="me-3 thumbnail mb-4 mb-lg-0 d-inline-block">
                    <ReactPlayer
                      url={post.videoUrl}
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
                        <h3 class="m-0 p-0">{post.author}</h3>
                      </div>
                    </div>
                    <h3 className=" m-0">{post.title} </h3>
                    <p>{post.content} </p>

                  </div>
                </div>
              }
              )}
            </div>




          </div>
        </div>
      </section>
    </>
  );
};

export default Others;
