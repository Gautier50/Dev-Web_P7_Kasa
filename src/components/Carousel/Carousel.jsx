import React from "react";
import dataSlideshow from "../../data.json";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./carousel.css";

const Slideshow = (props) => {
  
  return (
    <Carousel showIndicators={false} showStatus={false} showThumbs={false}>
      {dataSlideshow.map((slide) => (
        <div key={slide.id}>
          <img src={props.pictures} alt="images carousel" />
        </div>
      ))}
    </Carousel>
  );
};

export default Slideshow;
