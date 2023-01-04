import React from "react";
import dataSlideshow from "../../data.json";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./carousel.css";

const Slideshow = (slides) => {
  
  
  return (
    <Carousel showIndicators={false} showStatus={false} showThumbs={false}>
      {dataSlideshow.map((slide, index) => (
        <div key={index}>
          <img src={slide} alt="images carousel" />
        </div>
      ))}
    </Carousel>
  );
};

export default Slideshow;
