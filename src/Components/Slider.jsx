import React from 'react';
import { Carousel } from 'react-bootstrap';

const Slider = () => {
  return (
    <div>
      <section id="hero-slider" className="hero-slider">
        <div className="container-md" data-aos="fade-in">
          <div className="row">
            <div className="col-12">
              <Carousel
                controls={true}
                indicators
                interval={30000} // Set the interval for auto sliding in milliseconds
              >
                <Carousel.Item>
                  <div className="img-bg d-flex align-items-end" style={{ backgroundImage: `url('assets/img/image2.jpg')` }}>
                    <div className="img-bg-inner">
                      <h2>The Best Homemade Masks for Face (keep the Pimples Away)</h2>
                      <p>Lorem ipsum dolor sit amet...</p>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="img-bg d-flex align-items-end" style={{ backgroundImage: `url('assets/img/image3.jpg')` }}>
                    <div className="img-bg-inner">
                      <h2>The Best Homemade Masks for Face (keep the Pimples Away)</h2>
                      <p>Lorem ipsum dolor sit amet...</p>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="img-bg d-flex align-items-end" style={{ backgroundImage: `url('assets/img/image1.jpg')` }}>
                    <div className="img-bg-inner">
                      <h2>The Best Homemade Masks for Face (keep the Pimples Away)</h2>
                      <p>Lorem ipsum dolor sit amet...</p>
                    </div>
                  </div>
                </Carousel.Item>
                

              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Slider;




// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
// import image from "./slideData.json"

// const Slider = () => {
//   // new
//   const [slides, setslides] = useState([]);
 

//   useEffect(() => {
//     setslides(image);
//   }, []);
//   // new end

//   return (
//     <div>
//       <section id="hero-slider" class="hero-slider">
//         <div class="container-md" data-aos="fade-in">
//           <div class="row">
//             <div class="col-12">
//               <div class="swiper sliderFeaturedPosts">
//                 <div class="swiper-wrapper">
                  
//                 {slides.map((item, index)=>{
//                   return 
//                   <div key={index} class="swiper-slide">
//                   <div  class="img-bg d-flex align-items-end" style={{ backgroundImage: item.src }}>
//                     <div class="img-bg-inner">
//                       <h2>The Best Homemade Masks for Face (keep the Pimples Away)</h2>
//                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem neque est mollitia! Beatae minima assumenda repellat harum vero, officiis ipsam magnam obcaecati cumque maxime inventore repudiandae quidem necessitatibus rem atque.</p>
//                     </div>
//                   </div>
//                 </div>
//                 })}
                  

//                   <div class="swiper-slide">
//                     <div  class="img-bg d-flex align-items-end" style={{ backgroundImage: `url('assets/img/post-slide-2.jpg')` }}>
//                       <div class="img-bg-inner">
//                         <h2>17 Pictures of Medium Length Hair in Layers That Will Inspire Your New Haircut</h2>
//                         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem neque est mollitia! Beatae minima assumenda repellat harum vero, officiis ipsam magnam obcaecati cumque maxime inventore repudiandae quidem necessitatibus rem atque.</p>
//                       </div>
//                     </div>
//                   </div>

//                   <div class="swiper-slide">
//                     <div  class="img-bg d-flex align-items-end" style={{ backgroundImage: `url('assets/img/post-slide-3.jpg')` }}>
//                       <div class="img-bg-inner">
//                         <h2>13 Amazing Poems from Shel Silverstein with Valuable Life Lessons</h2>
//                         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem neque est mollitia! Beatae minima assumenda repellat harum vero, officiis ipsam magnam obcaecati cumque maxime inventore repudiandae quidem necessitatibus rem atque.</p>
//                       </div>
//                     </div>
//                   </div>

//                   {/* <div class="swiper-slide">
//                     <a  class="img-bg d-flex align-items-end" style="background-image: url('assets/img/post-slide-4.jpg');">
//                       <div class="img-bg-inner">
//                         <h2>9 Half-up/half-down Hairstyles for Long and Medium Hair</h2>
//                         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem neque est mollitia! Beatae minima assumenda repellat harum vero, officiis ipsam magnam obcaecati cumque maxime inventore repudiandae quidem necessitatibus rem atque.</p>
//                       </div>
//                     </a>
//                   </div> */}
//                 </div>
//                 <div class="custom-swiper-button-next">
//                   <span class="bi-chevron-right"></span>
//                 </div>
//                 <div class="custom-swiper-button-prev">
//                   <span class="bi-chevron-left"></span>
//                 </div>

//                 <div class="swiper-pagination"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//     </div>
//   )
// }

// export default Slider