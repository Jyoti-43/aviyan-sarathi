//SignUp.js
import { React, useEffect, useState } from 'react';

import './signup.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const SignUp = () => {

  const [input, setInput] = useState({
    nameName: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const navigate = useNavigate()
  const [posts, setPosts] = useState([]);
  const [submit, setSubmit] = useState(false)
  const [isFormValid, setIsFormValid] = useState(false);

  const [errors, setErrors] = useState({});




  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    if (name === 'nameName') {
      setInput({
        ...input,
        nameName: value,
      })
    }
    else if (name === 'phoneNumber') {
      setInput({
        ...input,
        phoneNumber: value,
      })
    }
    else if (name === 'email') {
      setInput({
        ...input,
        email: value,
      })
    }
    else if (name === 'password') {
      setInput({
        ...input,
        password: value,
      })
    }
    else if (name === 'confirmPassword') {
      setInput({
        ...input,
        confirmPassword: value,
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    //  validation
    let formErrors = {};
    if (input.nameName === "") {
      formErrors.nameName = 'User name is required';

    }
    if (input.phoneNumber === "") {
      formErrors.phoneNumber = 'Phone Number  is required';

    }
    else if (!/(?:\(?\+977\)?)?[9][6-9]\d{8}|01[-]?[0-9]{7}/.test(input.phoneNumber)) {
      formErrors.phoneNumber = 'Phone number is invalid';

    }
    if (input.email === "") {
      formErrors.email = 'Email is required';

    } else if (!/\S+@\S+\.\S+/.test(input.email)) {
      formErrors.email = 'Email is invalid';

    }
    if (input.password === "") {
      formErrors.password = 'Password is required';

    } else if (input.password.length < 6) {

      formErrors.password = 'Password must be at least 6 characters long';
    }
    if (input.confirmPassword === "") {
      formErrors.confirmPassword = 'Confirm Password is required';

    } else if (!input.password === input.confirmPassword) {
      formErrors.confirmPassword = 'Confirm Password does not match';

    }

    if (Object.keys(formErrors)?.length === 0) {
      // Form is valid, proceed with submission
      setIsFormValid(true);
      console.log(input);
      setSubmit(true);
      navigate("/login");
    } else {
      // Form has errors, update state to display error messages
      setIsFormValid(false)
      setErrors(formErrors);
      setSubmit(false);
    }

    // sending data to server
    axios.post('http://localhost:3000/signup')
      .then((response) => {
        console.log(response.data);
        setPosts(response.data)
        setSubmit(true)


      })
      .catch((error) => {
        console.log(error);
      })

    setInput({
      nameName: '',
      phoneNumber: '',
      email: '',
      password: '',
      confirmPassword: '',
    });


    setInput("");
  };


  return (
    <>
      <header>
        <div className="container">


          <div className="signup-container  ">
            <div className="container-body ">

              <form onSubmit={handleSubmit} className='signup-form '>


                <div className="field ">
                <h2 className='text-overlay'>Welcome, to signIn page </h2>
                <hr/>
                  <div className='form-group'>
                    <label style={{ display: "block", textAlign: "left" }}>Full Name:</label>
                    <input
                      type="text"
                      name="nameName"
                      placeholder="Enter Your Full Name"
                      value={input.nameName}
                      onChange={handleChange}
                    />{''}
                    {errors.nameName && <div className="error">{errors.nameName}</div>}
                  </div>

                  <div className="form-group">
                    <label style={{ display: "block", textAlign: "left" }}>Phone :</label>
                    <input
                      type="text"
                      name="phoneNumber"
                      placeholder="Enter Your Phone Number"
                      value={input.phoneNumber}
                      onChange={handleChange}
                    />{''}
                    {errors.phoneNumber && <div className="error">{errors.phoneNumber}</div>}
                  </div>

                  {/* </div>


          <div className="col"> */}
                  <div className="form-group">
                    <label style={{ display: "block", textAlign: "left" }}>Email:</label>
                    <input
                      type="email"
                      name="email"
                      placeholder=" Enter Your Email"
                      value={input.email}
                      onChange={handleChange}
                    />
                    {errors.email && <div className="error">{errors.email}</div>}
                  </div>

                  {/* </div>


          <div className="col"> */}
                  <div className="form-group">
                    <label style={{ display: "block", textAlign: "left" }}>Password:</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter Your Password"
                      value={input.password}
                      onChange={handleChange}
                    />
                    {errors.password && <div className="error">{errors.password}</div>}
                  </div>

                  <div className="form-group">
                    <label style={{ display: "block", textAlign: "left"  }}>Confirm Password:</label>
                    <input
                      type="password"
                      name="confirmPassword"
                      placeholder="Enter Your Confirm Password"
                      value={input.confirmPassword}
                      onChange={handleChange}
                    />
                    {errors.password && <div className="error">{errors.confirmPassword}</div>}
                  </div>

                  <div className='submit'>

                    <button className='btn ' varient='success' type="submit"  >Sign Up</button>


                  </div>
                </div>
              </form>
             
            </div >


          </div >
        </div>
        <div className="signup-image">
                <img src="./assets/img/old1.png" alt="Sign Up" />
                <div className='mt-3  '>
                  <p>Honoring the past, inspiring the future. </p>
                </div>
              </div>
      </header>
    </>
  );
}

export default SignUp;