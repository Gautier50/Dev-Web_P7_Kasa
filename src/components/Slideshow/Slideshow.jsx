import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Slideshow from "../Slideshow/Slideshow.css";

const Slideshow = () => {
  return (
    <Carousel>
      {data.map((slide) => (
        <div key={slide.id}>
          <img src={slide.cover} alt="images carousel" />
        </div>
      ))}
    </Carousel>
  );
};

export default Slideshow;
