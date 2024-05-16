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
                  <div className="img-bg d-flex align-items-end" style={{ backgroundImage: `url('assets/img/image2.jpg')`, borderRadius:"15px" , overflow:"hidden" }}>
                    <div className="img-bg-inner">
                      <h2>The Best Homemade Masks for Face (keep the Pimples Away)</h2>
                      <p>Lorem ipsum dolor sit amet...</p>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="img-bg d-flex align-items-end " style={{ backgroundImage: `url('assets/img/image3.jpg')`, borderRadius:"15px" , overflow:"hidden" }}>
                    <div className="img-bg-inner">
                      <h2>The Best Homemade Masks for Face (keep the Pimples Away)</h2>
                      <p>Lorem ipsum dolor sit amet...</p>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="img-bg d-flex align-items-end" style={{ backgroundImage: `url('assets/img/image1.jpg')`, borderRadius:"15px" , overflow:"hidden" }}>
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




