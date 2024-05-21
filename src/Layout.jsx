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
import Politics from './Components/Politics'
import Stories from './Components/StoriesPage'
import SignUp from './Components/SignUp'
import Cultural from './Components/Cultural'
import Others from './Components/OtherPage'



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
        { path: '/upload', element: <Upload /> },
        { path: '/stories', element: <Stories /> },
        { path: '/stories/politics', element: <Politics /> },
        { path: '/stories/others', element: <Others /> },
        { path: '/stories/cultural', element: <Cultural /> }

    ]);

    const handleLogin = () => {

        navigate('/login')
    }



    return (
        <div>
            <header id="header" className="header d-flex align-items-center fixed-top m-0">
                <div className="container-fluid container-xl d-flex align-items-center justify-content-between ">



                    <div className='logo mx-0 pt-1'>
                        <img src="assets/img/aviyanLogo.png" className='' alt="Aviyan Sarathi" style={{ maxWidth: '250px', maxHeight: '150px' }} />
                    </div>
                    {/* new */}
                    <input type="checkbox" id="sidebar-active" />
                    <label for="sidebar-active" className='open-sidebar-button '>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                        </svg>
                    </label>
                    <label id="overlay" for="sidebar-active"></label>
                    {/* new end */}


                    <div className="position-relative">

                        <nav id="navbar" className="navbar navbar-expand-lg  navbar-dark ">

                            <div className="navbar-nav mr-auto mt-2 mt-lg-0">
                                {/* new */}
                                <label for="sidebar-active" className='close-sidebar-button'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                                    </svg>
                                </label>
                                {/* end */}

                                <ul>

                                    <li type="none" className='nav-item'> <Link className='nav-link' to='/'>Home</Link> </li>
                                    <li type="none" className='nav-item'> <Link to="/about" className='nav-link'>About</Link> </li>
                                    <li type="none" className='nav-item'> <Link to="/contact" className='nav-link'>Contact</Link> </li>

                                    <li type="none" className="nav-item dropdown"><Link to="/stories" className='nav-link'>Stories</Link> <i class="bi bi-chevron-down dropdown-indicator"></i>
                                        <ul>

                                            <li type="none" className='nav-item'><Link to="/stories/politics">Political</Link></li>
                                            <li type="none" className='nav-item'><Link to="/stories/cultural">Cultural</Link></li>

                                            <li type="none" className='nav-item' ><Link to="/stories/others">Others</Link></li>

                                        </ul>
                                    </li>


                                    {/* { auth.user
                                     ? */}
                                    <li type="none" className='nav-item' >
                                        <Link to="/upload" className='nav-link'>
                                            Add Story
                                        </Link>

                                    </li>

                                    <li type="none">
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

                        <div className="row g-2">
                            <div className="col-lg-2">
                                <h3 className="footer-heading mx-0"> <Link to="/about" className='text-white '>  About </Link></h3>
                                <h5 className="footer-para" > Preserving stories, bridging hearts. Honoring the past, inspiring the future.
                                    And empowering seniors' voices.
                                </h5>

                            </div>



                            <div className="col-lg-3 mx-4">
                                <h3 className="footer-heading mx-2">Navigation</h3>

                                <ul className="footer-links  list-unstyled">
                                    <li>
                                        <Link to="/" className="d-flex align-items-center">

                                            <div>

                                                <span>Home</span>
                                            </div>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="/about" className="d-flex align-items-center">

                                            <div>

                                                <span>About</span>
                                            </div>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="/contact" className="d-flex align-items-center">

                                            <div>

                                                <span>Contact</span>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-1 col-1 mx-0 position-relative logo-column">
                                <span><h3 className="footer-heading ">Supported By:</h3></span>
                                <img src="assets/img/techLeadhers.png" className="img-fluid my-5 logo-footer" alt="TechLeadhers" />

                                <img src="assets/img/KMC.png" className="img-fluid rounded-circle ml-3 logo-footer" alt="KMC" />
                                <img src="assets/img/Aaviyanta.png" className="img-fluid mb-4  logo-footer" alt="Aaviyanta Foundation" />
                            </div>



                        </div>
                    </div>
                </div>

                <div className="footer-legal py-2 ">
                    <div className="container">

                        <div className="row g-6 justify-content-between m-0">
                            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0 p-0">
                                <div className="copyright">
                                    © Copyright <strong><span>Aaviyan Sarathi</span></strong>. All Rights Reserved
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="social-links mb-3 mb-lg-0 text-center text-md-end">
                                    <div className="credits">
                                        Designed by : Team Aaviyan-Sarathi
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