import React from 'react'


import Slider from './Slider'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './Contact'
import Layout from '../Layout'
import About from './About'
import HomePageStories from './HomePageStories'

const Home = () => {

  return (
    <div>
      <Slider   />
     <HomePageStories/>
    </div >
  )
}

export default Home