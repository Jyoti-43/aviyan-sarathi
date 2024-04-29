import React, { useEffect, useState} from 'react'
import  postData from "./data.json"

const StoryDetails = () => {
  const[posts, setPosts] = useState([]);

 useEffect(()=>{
  setPosts(postData);
 }, [])

 
  const sortedPosts = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date))


  return (
    <div>
      <main id="main">

        <section className="single-post-content">
          <div className="container">
            <div className="row">
              <div className="col-md-9 post-content" data-aos="fade-up">


                <div className="single-post">
                  <div className="post-meta"><span className="date">Business</span> <span className="mx-1">&bullet;</span> <span>Jul 5th '2</span></div>
                  <h1 className="mb-5">13 Amazing Poems from Shel Silverstein with Valuable Life Lessons</h1>
                  <p><span className="firstcharacter">L</span>orem ipsum dolor sit, amet consectetur adipisicing elit. Ratione officia sed, suscipit distinctio, numquam omnis quo fuga ipsam quis inventore voluptatum recusandae culpa, unde doloribus saepe labore alias voluptate expedita? Dicta delectus beatae explicabo odio voluptatibus quas, saepe qui aperiam autem obcaecati, illo et! Incidunt voluptas culpa neque repellat sint, accusamus beatae, cumque autem tempore quisquam quam eligendi harum debitis.</p>
                  <figure className="my-4">
                    <img src="assets/img/post-landscape-1.jpg" alt="" className="img-fluid" />
                    <figcaption>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, odit? </figcaption>
                  </figure>
                  <p>Sunt reprehenderit, hic vel optio odit est dolore, distinctio iure itaque enim pariatur ducimus. Rerum soluta, perspiciatis voluptatum cupiditate praesentium repellendus quas expedita exercitationem tempora aliquam quaerat in eligendi adipisci harum non omnis reprehenderit quidem beatae modi. Ea fugiat enim libero, ipsam dicta explicabo nihil, tempore, nulla repellendus eos necessitatibus eligendi corporis cum? Eaque harum, eligendi itaque numquam aliquam soluta.</p>
                  <p>Explicabo perspiciatis, laborum provident voluptates illum in nulla consectetur atque quaerat excepturi quisquam, veniam velit ex pariatur quos consequuntur? Excepturi reiciendis perferendis, cupiditate dolorem eos illum amet. Beatae voluptates nemo esse ratione voluptate, nesciunt fugit magnam veritatis voluptas dignissimos doloribus maiores? Aliquam, dolores natus exercitationem corrupti blanditiis, consequuntur nihil nobis sed voluptatibus maiores sunt, illo provident aliquid laborum. Vitae, ut.</p>
                  <p>Reprehenderit aut sed doloribus blanditiis, aspernatur magni? In molestias rem, similique ut esse repudiandae quod recusandae dolores neque earum omnis at, suscipit fuga? Minima qui veniam deserunt quisquam error amet at ratione nesciunt porro quis placeat repudiandae voluptatibus officiis fuga necessitatibus, expedita officia adipisci eaque labore accusamus? Nesciunt repellat illo exercitationem facilis similique quaerat, quis sequi? Praesentium nulla ipsam dolor.</p>
                  <p>Dolorum, incidunt! Adipisci harum itaque maxime dolores doloremque porro eligendi quis, doloribus vel sit rerum sunt obcaecati nam suscipit nulla vitae alias blanditiis aliquam debitis atque illo modi et placeat. Ratione iure eveniet provident. Culpa laboriosam sed ad quia. Corrupti, earum, perferendis dolore cupiditate sint nihil maiores iusto tempora nobis porro itaque est. Ut laborum culpa assumenda pariatur et perferendis?</p>
                  <p>Est soluta veritatis laboriosam, consequuntur temporibus asperiores, fugit id a ullam sed, expedita sequi doloribus fugiat. Odio et necessitatibus enim nam, iste reprehenderit cupiditate omnis ut iure aliquid obcaecati, repellendus nemo provident eveniet tempora minus! Voluptates aut laboriosam, maiores nihil accusantium, a dolorum quaerat tenetur illo eum culpa cum laudantium sunt doloremque modi possimus magni? Perferendis cum repudiandae corrupti porro.</p>
                  <hr className="w-100 border border-dark my-5 " />
                  {/* */}
                </div>


                {/* <!-- ======= Comments Form ======= -->  <-----Facebook plugin ----->
            <div className="row justify-content-center mt-5">

              <div className="col-lg-12">
                <h5 className="comment-title">Leave a Comment</h5>
                <div className="row">
                  <div className="col-lg-6 mb-3">
                    <label for="comment-name">Name</label>
                    <input type="text" className="form-control" id="comment-name" placeholder="Enter your name"/>
                  </div>
                  <div className="col-lg-6 mb-3">
                    <label for="comment-email">Email</label>
                    <input type="text" className="form-control" id="comment-email" placeholder="Enter your email"/>
                  </div>
                  <div className="col-12 mb-3">
                    <label for="comment-message">Message</label>

                    <textarea className="form-control" id="comment-message" placeholder="Enter your name" cols="30" rows="10"></textarea>
                  </div>
                  <div className="col-12">
                    <input type="submit" className="btn btn-primary" value="Post comment"/>
                  </div>
                </div>
              </div>
            </div> */}

              </div>
              <div className="col-md-3">

                <div className="aside-block">

                  <ul className="nav nav-pills custom-tab-nav mb-4" id="pills-tab" role="tablist">
                    {/* <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="pills-popular-tab" data-bs-toggle="pill" data-bs-target="#pills-popular" type="button" role="tab" aria-controls="pills-popular" aria-selected="true">Popular</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="pills-trending-tab" data-bs-toggle="pill" data-bs-target="#pills-trending" type="button" role="tab" aria-controls="pills-trending" aria-selected="false">Trending</button>
                </li> */}
                    <li className="nav-item" role="presentation">
                      <button className="nav-link " id="pills-latest-tab" data-bs-toggle="pill" data-bs-target="#pills-latest" type="button" role="tab" aria-controls="pills-latest" aria-selected="true">Latest</button>
                    </li>
                  </ul>

                  <div className="tab-content" id="pills-tabContent">

                    <>
                      {/* <div className="tab-pane fade show active" id="pills-popular" role="tabpanel" aria-labelledby="pills-popular-tab">
                  <div className="post-entry-1 border-bottom">
                    <div className="post-meta"><span className="date">Sport</span> <span className="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                    <h2 className="mb-2"><a href="#">How to Avoid Distraction and Stay Focused During Video Calls?</a></h2>
                    <span className="author mb-3 d-block">Jenny Wilson</span>
                  </div>

                  <div className="post-entry-1 border-bottom">
                    <div className="post-meta"><span className="date">Lifestyle</span> <span className="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                    <h2 className="mb-2"><a href="#">17 Pictures of Medium Length Hair in Layers That Will Inspire Your New Haircut</a></h2>
                    <span className="author mb-3 d-block">Jenny Wilson</span>
                  </div>

                  <div className="post-entry-1 border-bottom">
                    <div className="post-meta"><span className="date">Culture</span> <span className="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                    <h2 className="mb-2"><a href="#">9 Half-up/half-down Hairstyles for Long and Medium Hair</a></h2>
                    <span className="author mb-3 d-block">Jenny Wilson</span>
                  </div>

                  <div className="post-entry-1 border-bottom">
                    <div className="post-meta"><span className="date">Lifestyle</span> <span className="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                    <h2 className="mb-2"><a href="#">Life Insurance And Pregnancy: A Working Mom’s Guide</a></h2>
                    <span className="author mb-3 d-block">Jenny Wilson</span>
                  </div>

                  <div className="post-entry-1 border-bottom">
                    <div className="post-meta"><span className="date">Business</span> <span className="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                    <h2 className="mb-2"><a href="#">The Best Homemade Masks for Face (keep the Pimples Away)</a></h2>
                    <span className="author mb-3 d-block">Jenny Wilson</span>
                  </div>

                  <div className="post-entry-1 border-bottom">
                    <div className="post-meta"><span className="date">Lifestyle</span> <span className="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                    <h2 className="mb-2"><a href="#">10 Life-Changing Hacks Every Working Mom Should Know</a></h2>
                    <span className="author mb-3 d-block">Jenny Wilson</span>
                  </div>
                </div>   */}

                      {/* <div className="tab-pane fade" id="pills-trending" role="tabpanel" aria-labelledby="pills-trending-tab">
                  <div className="post-entry-1 border-bottom">
                    <div className="post-meta"><span className="date">Lifestyle</span> <span className="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                    <h2 className="mb-2"><a href="#">17 Pictures of Medium Length Hair in Layers That Will Inspire Your New Haircut</a></h2>
                    <span className="author mb-3 d-block">Jenny Wilson</span>
                  </div>

                  <div className="post-entry-1 border-bottom">
                    <div className="post-meta"><span className="date">Culture</span> <span className="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                    <h2 className="mb-2"><a href="#">9 Half-up/half-down Hairstyles for Long and Medium Hair</a></h2>
                    <span className="author mb-3 d-block">Jenny Wilson</span>
                  </div>

                  <div className="post-entry-1 border-bottom">
                    <div className="post-meta"><span className="date">Lifestyle</span> <span className="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                    <h2 className="mb-2"><a href="#">Life Insurance And Pregnancy: A Working Mom’s Guide</a></h2>
                    <span className="author mb-3 d-block">Jenny Wilson</span>
                  </div>

                  <div className="post-entry-1 border-bottom">
                    <div className="post-meta"><span className="date">Sport</span> <span className="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                    <h2 className="mb-2"><a href="#">How to Avoid Distraction and Stay Focused During Video Calls?</a></h2>
                    <span className="author mb-3 d-block">Jenny Wilson</span>
                  </div>
                  <div className="post-entry-1 border-bottom">
                    <div className="post-meta"><span className="date">Business</span> <span className="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                    <h2 className="mb-2"><a href="#">The Best Homemade Masks for Face (keep the Pimples Away)</a></h2>
                    <span className="author mb-3 d-block">Jenny Wilson</span>
                  </div>

                  <div className="post-entry-1 border-bottom">
                    <div className="post-meta"><span className="date">Lifestyle</span> <span className="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                    <h2 className="mb-2"><a href="#">10 Life-Changing Hacks Every Working Mom Should Know</a></h2>
                    <span className="author mb-3 d-block">Jenny Wilson</span>
                  </div>
                </div> */}

                    </>


                    <div className="tab-pane fade show active" id="pills-latest" role="tabpanel" aria-labelledby="pills-latest-tab">
                      {sortedPosts.map((post, index) => {
                        return (
                          <div key={index} className="post-entry-1 border-bottom">

                            <div className="post-meta"><span className="date">Culture</span> <span className="mx-1">&bullet;</span> <span>{post.date}</span></div>
                            <h2 className="mb-2"><a href="#">{post.title}</a></h2>
                            <span className="author mb-3 d-block">{post.author}</span>


                          </div>
                        );
                      })}


                    </div>

                  </div>
                </div>

                <div className="aside-block">
                  <h3 className="aside-title">Video</h3>
                  <div className="video-post">
                    <a href="https://www.youtube.com/watch?v=AiFfDjmd0jU" className="glightbox link-video">
                      <span className="bi-play-fill"></span>
                      <img src="assets/img/post-landscape-5.jpg" alt="" className="img-fluid" />
                    </a>
                  </div>
                </div>

                {/* <div className="aside-block">
              <h3 className="aside-title">Categories</h3>
              <ul className="aside-links list-unstyled">
                <li><a href="category.html"><i className="bi bi-chevron-right"></i> Business</a></li>
                <li><a href="category.html"><i className="bi bi-chevron-right"></i> Culture</a></li>
                <li><a href="category.html"><i className="bi bi-chevron-right"></i> Sport</a></li>
                <li><a href="category.html"><i className="bi bi-chevron-right"></i> Food</a></li>
                <li><a href="category.html"><i className="bi bi-chevron-right"></i> Politics</a></li>
                <li><a href="category.html"><i className="bi bi-chevron-right"></i> Celebrity</a></li>
                <li><a href="category.html"><i className="bi bi-chevron-right"></i> Startups</a></li>
                <li><a href="category.html"><i className="bi bi-chevron-right"></i> Travel</a></li>
              </ul>
            </div> */}

                {/* <div className="aside-block">
              <h3 className="aside-title">Tags</h3>
              <ul className="aside-tags list-unstyled">
                <li><a href="category.html">Business</a></li>
                <li><a href="category.html">Culture</a></li>
                <li><a href="category.html">Sport</a></li>
                <li><a href="category.html">Food</a></li>
                <li><a href="category.html">Politics</a></li>
                <li><a href="category.html">Celebrity</a></li>
                <li><a href="category.html">Startups</a></li>
                <li><a href="category.html">Travel</a></li>
              </ul>
            </div> */}

              </div>
            </div>
          </div>
        </section>
      </main></div>
  )
}

export default StoryDetails