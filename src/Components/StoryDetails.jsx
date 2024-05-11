import React, { useEffect, useState } from 'react';
import postData from './data.json';
import ReactPlayer from 'react-player';
import PostWithFacebookPlugin from './CommentOnPost';

const StoryDetails = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [sortedPosts, setSortedPosts] = useState([])

  useEffect(() => {
    setPosts(postData);
  }, []);

  useEffect(() => {
    // not working
    setSortedPosts([...posts].sort((a, b) => new Date(b.date) - new Date(a.date)));

  }, [posts]);


  const handlePostClick = (index) => {
    setSelectedPost(sortedPosts[index]);
  };
  <PostWithFacebookPlugin />

  return (
    <div>
      <main id="main">
        <section className="single-post-content">
          <div className="container">
            <div className="row">
              <div className="col-md-9 post-content" data-aos="fade-up">
                {/* <PostWithFacebookPlugin/> */}
                <div className="single-post">
                  {selectedPost ? (
                    <>
                      <div className="post-meta">
                        <span className="date">{selectedPost.category}</span>{' '}
                        <span className="mx-1">&bullet;</span>{' '}
                        <span>{selectedPost.date}</span>
                      </div>
                      <h1 className="mb-5">{selectedPost.title}</h1>
                      <p>{selectedPost.content}</p>
                      <figure className="my-4  w-100 h-100 ">


                        <div className=" mb-4 mb-lg-0 d-inline-block">
                          <ReactPlayer
                            url={selectedPost.videoUrl}
                            width="90%"
                            height="80%"
                            controls
                            
                          />

                        </div>

                        <figcaption>{selectedPost.imageCaption}</figcaption>
                      </figure>
                     

                    </>
                  ) : (

                    <>

                      <div className="post-meta">
                        <span className="date">Culture</span>{' '}
                        <span className="mx-1">&bullet;</span>{' '}
                        <span>{sortedPosts[0]?.date}</span>
                      </div>
                      <h1 className="mb-5">{sortedPosts[0]?.title}</h1>
                      <p>{sortedPosts[0]?.content}</p>
                      <figure className="my-4">
                      <div className="video-fluid">
                          <ReactPlayer
                            url={sortedPosts[0]?.videoUrl}
                            width="80%"
                            height="40%"
                            controls
                            active
                          />

                        </div>
                       
                        <figcaption>{sortedPosts[0]?.imageCaption}</figcaption>
                      </figure>
                     

                    </>
                  )}
                </div>
              </div>
              <div className="col-md-3">
                <div className="aside-block">
                  <ul className="nav nav-pills custom-tab-nav mb-4" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button className="nav-link " id="pills-latest-tab" data-bs-toggle="pill" data-bs-target="#pills-latest" type="button" role="tab" aria-controls="pills-latest" aria-selected="true">
                        Latest
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-latest" role="tabpanel" aria-labelledby="pills-latest-tab">
                     {/* maping of data */}
                      {sortedPosts.map((post, index) => (
                        <div
                          key={index}
                          className="post-entry-1 border-bottom"
                          onClick={() => handlePostClick(index)}
                        >
                          <div className="post-meta">
                            <span className="date">Culture</span>{' '}
                            <span className="mx-1">&bullet;</span>{' '}
                            <span>{post.date}</span>
                          </div>
                          <h2 className="mb-2">
                            <a href="#">{post.title}</a>
                          </h2>
                          <span className="author mb-3 d-block">{post.author}</span>
                        </div>
                      ))}
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
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default StoryDetails;
