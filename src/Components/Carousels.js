import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true
    };
    return (
      <div className="p-8">
        {/* <h2> Single Item</h2> */}
        <Slider {...settings}>
          <div>
            <img className="w-full h-96 " src="images/fuu1.jpg" alt="loading" />
          </div>
          <div>
            <img className="w-full h-96 " src="images/glasses.jpg" alt="loading" />
          </div>
          <div>
            <img className="w-full h-96 " src="images/brand.jpg" alt="loading" />
          </div>
          <div>
            <img className="w-full h-96 " src="images/owl.png" alt="loading" />
          </div>
          <div>
            <img className="w-full h-96 " src="images/children.jpg" alt="loading" />
          </div>
          
        </Slider>
      </div>
    );
  }
}



