import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./carousel.css";

const Slider = (props) => {
  console.log(props.slides);
  
  return (
    <Carousel showIndicators={false} showStatus={false} showThumbs={false}>
      {props.slides.map((slide, index) => (
        <div key={index}>
          <img src={slide} alt="images carousel" />
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;
