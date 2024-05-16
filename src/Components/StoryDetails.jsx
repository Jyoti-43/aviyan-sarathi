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

    setSortedPosts([...posts].sort((a, b) => new Date(b.date) - new Date(a.date)));

  }, [posts]);


  const handlePostClick = (index) => {
    setSelectedPost(sortedPosts[index]);
  };
  // <PostWithFacebookPlugin />

  return (
    <div>
      <main id="main">
        <section className="single-post-content">
          <div className="container my-1">
            <div className="row">
              <div className="col-md-8 post-content p-2" data-aos="fade-up">
                <div className="single-post ">
                  {selectedPost ? (
                    <>
                      <div className="post-meta ">
                        <span className="date">{selectedPost.category}</span>{' '}
                        <span className="mx-1">{selectedPost.author}</span>{' '}
                        <span>Posted on: {selectedPost.date}</span>
                      </div>
                      <h1 className="mb-3">{selectedPost.title}</h1>

                      <figure className="mx-4  ">
                        <div className=" mb-4 mb-lg-0 d-inline-block mx-5">
                          <ReactPlayer
                            url={selectedPost.videoUrl}
                            max-width="60%"
                            max-height="40%"
                            controls
                          />
                          <figcaption>{selectedPost.imageCaption}</figcaption>
                        </div>

                        

                      </figure>
                      <p >{selectedPost.content}</p>

                      {/* facebook plugIn not working */}
                      <PostWithFacebookPlugin
                        url="http://localhost:3000/storyDetails"
                        width="350"
                        numPosts="5"
                      />


                    </>
                  ) : (
                    <>

                      <div className="post-meta">
                        <span className="date">{sortedPosts[0]?.author}</span>{' '}
                        <span className="mx-1"></span>{' '}
                        <span>{sortedPosts[0]?.date}</span>
                      </div>
                      
                      <h1 className="my-4">{sortedPosts[0]?.title}</h1>

                      <figure className="my-2 mx-5">
                        <div className="">
                          <ReactPlayer className="my-2 mx-5 pl-4"
                            url={sortedPosts[0]?.videoUrl}
                            max-width="60%"
                            max-height="40%"
                            controls
                            active
                          />
                          <figcaption>{sortedPosts[0]?.imageCaption}</figcaption>
                        </div>

                        
                      </figure>
                      <p className='text-justify mx-0 p-0'>{sortedPosts[0]?.content}</p>
                      <div> <p>If you want to personaly contact the person you can use following contact information:</p>
                        <p>{sortedPosts[0]?.contact} 981800000</p>
                      </div>
                      <PostWithFacebookPlugin
                        url="http://localhost:3000/storyDetails"
                        width="500"
                        numPosts="5"
                        height="200"
                      />

                    </>
                  )}
                </div>
              </div>
              <div className="col-md-4 p-1 ">
                <div className="aside-block">
                  <ul className="nav nav-pills custom-tab-nav mb-4" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <h2 className=" " id="pills-latest-tab" type="button" >
                        Stories
                      </h2>

                    </li>
                  </ul>
                  <hr />
                  <div className="tab-content my-2 py-2" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-latest" role="tabpanel" aria-labelledby="pills-latest-tab">
                      {/* maping of data */}
                      {sortedPosts.map((post, index) => (
                        <div
                          key={index}
                          className="post-entry-1 border-bottom"
                          onClick={() => handlePostClick(index)}
                        >
                          <div className="post-meta">

                            <span className="mx-1">Posted on:</span>{' '}
                            <span>{post.date}</span>
                          </div>
                          <h2 className="mb-2">
                            <a href="#">{post.title}</a>
                          </h2>
                          <span className="author mb-3 d-block">{post.author}</span>
                        </div>
                      ))}
                    </div>

                    {/* Extraa */}
                    {/* <div>
                    <ul className="nav nav-pills custom-tab-nav mb-4" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <h2 className=" " id="pills-latest-tab" type="button" >
                        Stories
                      </h2>
                    </li>
                  </ul>
                  <hr/>
                  <div className="post-meta">
                  <ReactPlayer className="my-2 mx-5"
                            url="https://www.youtube.com/watch?v=8k19E7DWcdg"
                            max-width="40%"
                            max-height="20%"
                            controls
                            active
                          />
                            <span className="mx-1">Posted on:</span>{' '}
                            <span>Api 06th 2024</span>
                          </div>
                          <h2 className="mb-2">
                            <a href="#">How to get motivated to do somthing</a>
                          </h2>
                          <span className="author mb-3 d-block">Mr.Balaram Thapa</span>
                  </div> */}
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
