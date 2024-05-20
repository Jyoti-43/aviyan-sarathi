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
                  <div className="img-bg d-flex align-items-end" style={{ backgroundImage: `url('assets/img/slideimg1.jpeg')`, borderRadius:"15px" , overflow:"hidden" }}>
                    <div className="img-bg-inner">
                      <h2>Preserving Stories, Bridging Hearts</h2>
                      <p></p>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="img-bg d-flex align-items-end " style={{ backgroundImage: `url('assets/img/old1.png')`, borderRadius:"15px" , overflow:"hidden" }}>
                    <div className="img-bg-inner">
                      <h2>Honoring The Past, Inspiring The Future.</h2>
                      <p></p>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="img-bg d-flex align-items-end" style={{ backgroundImage: `url('assets/img/old2.jpeg')`, borderRadius:"15px" , overflow:"hidden" }}>
                    <div className="img-bg-inner">
                     <h2>  Empowering Seniors' Voices.</h2>
                       
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




