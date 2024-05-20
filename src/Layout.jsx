import React, { useContext, useEffect, useState } from 'react'
import Home from './Components/Home'
import "./index.css"
import Contact from './Components/Contact'
import About from './Components/About'
import { Link, Navigate, useLocation, useNavigate, useRoutes } from 'react-router-dom'
import StoryDetails from './Components/StoryDetails'
import Login from "./Components/Login/Login";
import Upload from './Components/Upload';
import AuthProvider from './Components/context/AuthProvider'
import Politics from './Components/Stories/Politics'
import Stories from './Components/Stories/StoriesPage'
import SignUp from './Components/SignUp'


const Layout = (props) => {
    const auth = useContext(AuthProvider)
    const navigate = useNavigate()
    const location = useLocation()
    const [videos, setVideos] = useState([]);
    // const login = props.isLoggedIn;

    useEffect(() => {
        // Fetch videos from JSON file
        fetch('/videos.json')
            .then((response) => response.json())
            .then((data) => setVideos(data.videos))
            .catch((error) => console.error('Error fetching videos:', error));
    }, []);

    const handleUpload = (video) => {
        setVideos([...videos, video]);
    };

    const routing = useRoutes([
        { path: '/', element: <Home /> },
        { path: '/contact', element: <Contact /> },
        { path: '/about', element: <About /> },
        { path: '/storyDetails', element: <StoryDetails /> },
        { path: '/login', element: <Login /> },
        { path: '/signUp', element: <SignUp /> },
        { path: '/upload', element: <Upload  /> },
        { path: '/stories', element: <Stories /> },
        { path: '/stories/political', element: <Politics /> }

    ]);

    const handleLogin = () => {
       
        navigate('/login')
    }
   


    return (
        <div>
            <header id="header" className="header d-flex align-items-center fixed-top m-0">
                <div className="container-fluid container-xl d-flex align-items-center justify-content-between ">
                    <div className='logo mx-0'>
                        <img src="assets/img/SarathiLogo.png" className='' alt="Aviyan Sarathi" style={{ maxWidth: '150px', maxHeight: '100px' }} />
                    </div>


                    <div className="position-relative">
                        <nav id="navbar" className="navbar navbar-expand-lg  navbar-dark ">

                            <div className="navbar-nav mr-auto mt-2 mt-lg-0">
                                <ul>

                                    <li className='nav-item'> <Link className='nav-link' to='/'>Home</Link> </li>
                                    <li className='nav-item'> <Link to="/about" className='nav-link'>About</Link> </li>
                                    <li className='nav-item'> <Link to="/contact" className='nav-link'>Contact</Link> </li>

                                    <li className="nav-item dropdown"><Link to="/stories" className='nav-link'>Stories</Link> <i class="bi bi-chevron-down dropdown-indicator"></i>
                                        <ul>

                                            <li><Link to="/political">Political</Link></li>
                                            <li><a href="#">Social Welfare</a></li>
                                            <li><a href="#">Economy</a></li>
                                            <li><a href="#">Arts</a></li>
                                            <li><a href="#">Cultural and Tradition4</a></li>
                                            <li><a href="#">Personal Experience</a></li>
                                            <li><a href="#">Others</a></li>

                                        </ul>
                                    </li>


                                    {/* { auth.user
                                     ? */}
                                     <li className='nav-item' > 
                                        <Link to="/upload" className='nav-link'>
                                            Add Story
                                        </Link>
                                       
                                    </li>
                                    
                                    <li>
                                        <Link to='/login'> <button className="btn  m-3" onClick={handleLogin}> Login</button></Link>
                                    </li>
                                   
                                    





                                </ul>
                            </div>
                        </nav>




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
                                <h3 className="footer-heading mx-0"> <Link to="/about" className='text-white '>  About </Link></h3>
                                <p>Preserving stories, bridging hearts. Honoring the past, inspiring the future.
                                    And empowering seniors' voices.
                                </p>

                            </div>
                            <div className="col-6 col-lg-2 ">

                            </div>


                            <div className="col-lg-4">
                                <h3 className="footer-heading mx-0">Navigation</h3>

                                <ul className="footer-links  list-unstyled">
                                    <li>
                                        <a href="single-post.html" className="d-flex align-items-center">

                                            <div>

                                                <span>Home</span>
                                            </div>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="single-post.html" className="d-flex align-items-center">

                                            <div>

                                                <span>About</span>
                                            </div>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="single-post.html" className="d-flex align-items-center">

                                            <div>

                                                <span>Contact</span>
                                            </div>
                                        </a>
                                    </li>



                                </ul>

                            </div>

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