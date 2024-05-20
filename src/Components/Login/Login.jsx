
import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './login.css';
import SignUp from '../SignUp';

import axios from 'axios';
import AuthProvider from '../context/AuthProvider';
const Login = ({ isLoggedIn }) => {
    
    const [input, setInput] = useState({
        username: '',
        password: '',


    });
    const auth = useContext(AuthProvider)
    const navigate = useNavigate();
    const location = useLocation();
    const redirectPath = location.state?.path || '/'
    const [loggedIn, setLoggedIn] = useState(false);
    const [submit, setSubmit] = useState({ ...input });
    const [error, setError] = useState({ ...input });



    useEffect(() => {

        // Check if user is already logged in

        setLoggedIn(true);
        console.log(loggedIn)
    }, [loggedIn]);

    useEffect(() => {
        // Check if user is already logged in
        const token = localStorage.getItem('login');
        //if user is not logged in back to login page
        if (!token) {
            setLoggedIn(true);
            navigate('/login')
        }


            axios.get('https://localhost:3000/')
                .then((response) => {
                    console.log(response.data);
                    setInput(response.data)
                    setSubmit(true)

                })

                .catch((error) => {
                    console.log(error);
                })


    }, []);

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
        setError({
            ...error,
            [e.target.name]: e.target.value ? '' : 'Required Field',
        });

    };

    const handleClick = () => navigate("/signUp")

    const handleSubmit = async (e) => {
        e.preventDefault();
        //  username ma value set garxa
        auth.setUser({input})

        setSubmit({
            submit: true,
            ...input

        });
        setLoggedIn(true)
        setInput('');
        try {
            const response = await axios.post('https://localhost:27017/login', input);
            localStorage.setItem('token', response.data.token);
            setLoggedIn(true);
            isLoggedIn(false);
            navigate.push('/home'); // Redirect to home after successful login
        } catch (error) {
            console.log(error);
            // Handle login error
        }
    };

    // const handleLogout = () => {
    //     localStorage.removeItem('token');
    //     setLoggedIn(false);
    //     isLoggedIn(false);
    // };
    return (
        <>


            <header>
                <div className="container text-center">
                    <div className='row align-items-center'>
                        <div className=" col login-logo  mb-0">
                            <img src="./assets/img/aviyanLogo.png" alt="Logo " className='logo-img' />
                            <h2 > Your experiences are valuable. Let everyone's voice be heard and make a difference</h2>
                        </div>
                        <div className="col">
                            <form action="" method="post" onSubmit={handleSubmit} className='login-form'>
                                <div className="form_body ">
                                    <h2>Welcome to Aaviyan Sarathi</h2>
                                    <p>Please log into the form</p>
                                   
                                    
                                    <input className="login-input" type="email" id='email' name="username" placeholder='Email ' value={input.username}
                                        onChange={handleChange} required />
                                    <input className="login-input" type="password" id='password' name="password" placeholder='Password' value={input.password} onChange={handleChange} required />
                                    <div className='row  align-items-center'>
                                        <div className='col'>
                                            <Link to="/" >
                                                <button type='submit' className='login-btn'>Login</button>
                                            </Link>
                                        </div>

                                    </div>

                                    <hr />
                                   

                                    <button className='create' onClick={handleClick}>Sign In</button>

                                   

                                </div>
                            </form>
                        </div>
                    </div>
                </div >
            </header>
        </>
    )
}

export default Login
