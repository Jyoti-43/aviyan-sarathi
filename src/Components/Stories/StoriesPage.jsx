import React from 'react'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'

const StoriesPage = () => {
  return (
    <>
      <section class="category-section">
        <div class="container" data-aos="fade-up">

          <div class="section-header d-flex justify-content-between align-items-center mb-5">
            <span><h2>Stories</h2></span>
            <div>
              <h1 className='latest'>
                All Stories
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
                  <div class="post-meta"><span class="date"></span> <span class="mx-1"> </span> <span>Current Date</span></div>
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
                    url="https://www.youtube.com/watch?v=Aj_hnge3vBA"
                    width="93%"
                    height="87%"
                    controls
                  />

                </div>
                <div >
                  <div class="post-meta"><span class="date"></span> <span class="mx-1"> </span> <span>Current Date</span></div>
                  <div class="d-flex align-items-center author">
                    <div class="photo"><img src="assets/img/puranShakya.jpg" alt="" class="img-fluid" /></div>
                    <div class="name">
                      <h3 class="m-0 p-0">Puran Shakya </h3>
                    </div>
                  </div>

                  <h3 className=" m-0">< Link to="/storyDetails">Born in 1956, Shakya learned traditional painting from Siddhi Muni Shakya (1979 – 1982).."
                  </Link> </h3>
                  <p> He specialized in mineral color mixing and mudras of different deities. </p>

                </div>

              </div>


            </div>


            <div className="col-md-3">
              <div className="aside-block">

                <div className="tab-content" id="pills-tabContent">
                  <div className="tab-pane fade show active" id="pills-latest" role="tabpanel" aria-labelledby="pills-latest-tab">
                    {/* maping of data */}

                    <div

                      className="post-entry-1 border-bottom"
                    // onClick={() => handlePostClick(index)}
                    >
                      <div className="post-meta ">
                        <span className="mx-1"></span>{' '}
                        <span className="date">date</span>
                      </div>
                      <h2 className="mb-2">
                        <Link to="/storyDetails">Title</Link>
                      </h2>
                      <span className="author mb-3 d-block">Author Name</span>
                    </div>

                  </div>
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