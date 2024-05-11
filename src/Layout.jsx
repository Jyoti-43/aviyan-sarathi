import React from 'react'
import Home from './Components/Home'

import Contact from './Components/Contact'
import About from './Components/About'
import {  Link, useRoutes } from 'react-router-dom'
import StoryDetails from './Components/StoryDetails'


const Layout = () => {

    const routing = useRoutes([
        { path: '/', element: <Home /> },
        { path: '/contact', element: <Contact /> },
        { path: '/about', element: <About /> },
        { path : '/storyDetails' , element:<StoryDetails/>}
      ]);

    return (
        <div>
            <header id="header" className="header d-flex align-items-center fixed-top">
                <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
                    {/* <img src="assets/img/logo.png" alt="" /> */}
                    <h1>Aviyan Sarathi Project</h1>
                    <nav id="navbar" className="navbar">
                        <ul>
                    
                            {/* <li><a href="single-post.html">Single Post</a></li>
                            <li className="dropdown"><a href="category.html"><span>Categories</span> <i
                                className="bi bi-chevron-down dropdown-indicator"></i></a>
                                <ul>
                                    <li><a href="search-result.html">Search Result</a></li>
                                    <li><a href="#">Drop Down 1</a></li>
                                    <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i
                                        className="bi bi-chevron-down dropdown-indicator"></i></a>
                                        <ul>
                                            <li><a href="#">Deep Drop Down 1</a></li>
                                            <li><a href="#">Deep Drop Down 2</a></li>
                                            <li><a href="#">Deep Drop Down 3</a></li>
                                            <li><a href="#">Deep Drop Down 4</a></li>
                                            <li><a href="#">Deep Drop Down 5</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Drop Down 2</a></li>
                                    <li><a href="#">Drop Down 3</a></li>
                                    <li><a href="#">Drop Down 4</a></li>
                                </ul>
                            </li> */}

                            <li> <a href='/'>Home</a> </li>
                            <li> <Link to="/about">About</Link> </li>
                            <li> <Link to="/contact"> Contact</Link> </li>
                        </ul>
                    </nav>

                    <div className="position-relative">
                        <a href="#" className="mx-2"><span className="bi-facebook"></span></a>
                        <a href="#" className="mx-2"><span className="bi-twitter"></span></a>
                        <a href="#" className="mx-2"><span className="bi-instagram"></span></a>

                        <a href="#" className="mx-2 js-search-open"><span className="bi-search"></span></a>
                        <i className="bi bi-list mobile-nav-toggle"></i>

                        <div className="search-form-wrap js-search-form-wrap">
                            <form action="search-result.html" className="search-form">
                                <span className="icon bi-search"></span>
                                <input type="text" placeholder="Search" className="form-control" />
                                <button className="btn js-search-close"><span className="bi-x"></span></button>
                            </form>
                        </div>

                    </div>
                </div>
            </header>

            <main id="main">
             {routing || <Home />} {/* Render Home by default if no route matches */}
      
            </main>
            <footer id="footer" className="footer flex-shrink">

                <div className="footer-content py-3 ">
                    <div className="container ">

                        <div className="row g-6">
                            <div className="col-lg-4">
                                <h3 className="footer-heading "> <Link to ="/about" className='text-white m-0'>  About </Link></h3>
                                <p>Preserving stories, bridging hearts. Honoring the past, inspiring the future.
                                And empowering seniors' voices.
                                    </p>
                               
                            </div>
                            <div className="col-6 col-lg-2 ">
                                <h3 className="footer-heading m-0">Navigation</h3>
                                <ul className="footer-links list-unstyled ">
                                    <li><a href="index.html"><i className="bi bi-chevron-right"></i> Home</a></li>
                                    {/* <li><a href="index.html"><i className="bi bi-chevron-right"></i> Blog</a></li>
                                    <li><a href="category.html"><i className="bi bi-chevron-right"></i> Categories</a></li>
                                    <li><a href="single-post.html"><i className="bi bi-chevron-right"></i> Single Post</a></li> */}
                                    <li><a href="about.html"><i className="bi bi-chevron-right"></i> About us</a></li>
                                    <li><a href="contact.html"><i className="bi bi-chevron-right"></i> Contact</a></li>
                                </ul>
                            </div>
                            {/* <div className="col-6 col-lg-2">
                                <h3 className="footer-heading">Categories</h3>
                                <ul className="footer-links list-unstyled">
                                    <li><a href="category.html"><i className="bi bi-chevron-right"></i> Business</a></li>
                                    <li><a href="category.html"><i className="bi bi-chevron-right"></i> Culture</a></li>
                                    <li><a href="category.html"><i className="bi bi-chevron-right"></i> Sport</a></li>
                                   

                                </ul>
                            </div> */}

                            {/* <div className="col-lg-4">
                                <h3 className="footer-heading">Recent Posts</h3>

                                <ul className="footer-links footer-blog-entry list-unstyled">
                                    <li>
                                        <a href="single-post.html" className="d-flex align-items-center">
                                            <img src="assets/img/post-sq-1.jpg" alt="" className="img-fluid me-3" />
                                            <div>
                                                <div className="post-meta d-block"><span className="date">Culture</span> <span className="mx-1">&bullet;</span>
                                                    <span>Jul 5th '22</span>
                                                </div>
                                                <span>5 Great Startup Tips for Female Founders</span>
                                            </div>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="single-post.html" className="d-flex align-items-center">
                                            <img src="assets/img/post-sq-2.jpg" alt="" className="img-fluid me-3" />
                                            <div>
                                                <div className="post-meta d-block"><span className="date">Culture</span> <span className="mx-1">&bullet;</span>
                                                    <span>Jul 5th '22</span>
                                                </div>
                                                <span>What is the son of Football Coach John Gruden, Deuce Gruden doing Now?</span>
                                            </div>
                                        </a>
                                    </li>

                                    {/* <li>
                                        <a href="single-post.html" className="d-flex align-items-center">
                                            <img src="assets/img/post-sq-3.jpg" alt="" className="img-fluid me-3" />
                                            <div>
                                                <div className="post-meta d-block"><span className="date">Culture</span> <span className="mx-1">&bullet;</span>
                                                    <span>Jul 5th '22</span>
                                                </div>
                                                <span>Life Insurance And Pregnancy: A Working Mom’s Guide</span>
                                            </div>
                                        </a>
                                    </li> */}

                                    {/* <li>
                                        <a href="single-post.html" className="d-flex align-items-center">
                                            <img src="assets/img/post-sq-4.jpg" alt="" className="img-fluid me-3" />
                                            <div>
                                                <div className="post-meta d-block"><span className="date">Culture</span> <span className="mx-1">&bullet;</span>
                                                    <span>Jul 5th '22</span>
                                                </div>
                                                <span>How to Avoid Distraction and Stay Focused During Video Calls?</span>
                                            </div>
                                        </a>
                                    </li> 

                                </ul>

                            </div> */}
                        </div>
                    </div>
                </div>

                <div className="footer-legal py-2 ">
                    <div className="container">

                        <div className="row g-6 justify-content-between m-0">
                            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0 p-0">
                                <div className="copyright">
                                    © Copyright <strong><span>Aviyan Sarathi</span></strong>. All Rights Reserved
                                </div>

                                

                            </div>

                            <div className="col-md-6">
                                <div className="social-links mb-3 mb-lg-0 text-center text-md-end">
                                <div className="credits">
                                    Designed by : Team Aviyan-Sarathi
                                </div>
                                    {/* <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                                    <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                                    <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                                    <a href="#" className="google-plus"><i className="bi bi-skype"></i></a>
                                    <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a> */}
                                </div>

                            </div>

                        </div>

                    </div>
                </div>

            </footer>

        </div>
    )
}

export default Layout