//SignUp.js
import { React, useEffect, useState } from 'react';

import './signup.css';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { Modal } from 'react-bootstrap';
import { toBeRequired } from '@testing-library/jest-dom/matchers';



const SignUp = () => {

  const [input, setInput] = useState({
    userName: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [posts, setPosts] = useState([]);
  const [submit, setSubmit] = useState(false)
 const [isFormValid, setIsFormValid] = useState(false);

  const [errors, setErrors] = useState({});
 



  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    if (name === 'userName') {
      setInput({
        ...input,
        userName: value,
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
    if (input.userName==="") {
      formErrors.userName = 'User name is required';
    
    }
    if (input.phoneNumber==="") {
      formErrors.phoneNumber = 'Phone Number  is required';
     
    }
    else if (!/(?:\(?\+977\)?)?[9][6-9]\d{8}|01[-]?[0-9]{7}/.test(input.phoneNumber)) {
      formErrors.phoneNumber = 'Phone number is invalid';
      
    }
    if (input.email==="") {
      formErrors.email = 'Email is required';
     
    } else if (!/\S+@\S+\.\S+/.test(input.email)) {
      formErrors.email = 'Email is invalid';
      
    }
    if (input.password==="") {
      formErrors.password = 'Password is required';
     
    } else if (input.password.length < 6) {
      
      formErrors.password = 'Password must be at least 6 characters long';
    }
    if (input.confirmPassword==="") {
      formErrors.confirmPassword = 'Confirm Password is required';
      
    } else if (!input.password === input.confirmPassword) {
      formErrors.confirmPassword = 'Confirm Password does not match';
    
    }

    if (Object.keys(formErrors).length === 0) {
      // Form is valid, proceed with submission
      setIsFormValid(true);
      console.log(input);
      setSubmit(true);
    } else {
      // Form has errors, update state to display error messages
      setIsFormValid(false)
      setErrors(formErrors);
      setSubmit(false);
    }

    // sending data to server
    axios.post('https://localhost:5000/signup/signup', {
      userName: input.userName,
      phoneNumber: input.phoneNumber,
      email: input.email,
      password: input.password,
      confirmPassword: input.confirmPassword

    })
      .then((response) => {
        console.log(response);
        setPosts(response.data)
        setSubmit(true)


      })
      .catch((error) => {
        console.log(error);
      })

    setInput({
      userName: '',
      phoneNumber: '',
      email: '',
      password: '',
      confirmPassword: '',
    });


    setInput("");
  };


  return (
    <>
      <div className="signup-container  ">
        <div className="container-body ">

          <form onSubmit={handleSubmit} className='signup-form'>


            <div className="field ">
              <div className='form-group'>
              <label>UserName:</label>
              <input
                type="text"
                name="userName"
                placeholder="User Name Name"
                value={input.userName}
                onChange={handleChange   }
              />{''}
              {errors.userName && <div className="error">{errors.userName}</div>}
              </div>
              
              <div className="form-group">
              <label>Phone :</label>
              <input
                type="number"
                name="phoneNumber"
                placeholder=" Phone Number"
                value={input.phoneNumber}
                onChange={handleChange}
              />{''}
              {errors.phoneNumber && <div className="error">{errors.phoneNumber}</div>}
              </div>
            
              {/* </div>


          <div className="col"> */}
          <div className="form-group">
          <label>Email:</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={input.email}
                onChange={handleChange}
              />
              {errors.email && <div className="error">{errors.email}</div>}
          </div>
           
              {/* </div>


          <div className="col"> */}
          <div className="form-group">
          <label>Password:</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={input.password}
                onChange={handleChange}
              />
              {errors.password && <div className="error">{errors.password}</div>}
          </div>
            
              <div className="form-group">
              <label>Confirm Password:</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={input.confirmPassword}
                onChange={handleChange}
              />
              {errors.password && <div className="error">{errors.confirmPassword}</div>}
              </div>
              
              <div className='submit'>
                
                  <button className='btn ' varient='success' type="submit" >Sign Up</button>
                 

            </div>
        </div>
      </form>
    </div >

      
    </div >
    </>
  );
}

export default SignUp;