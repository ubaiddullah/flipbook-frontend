import React from "react";
import { Carousel } from "react-bootstrap";

const Slider = ({ data }) => {
  return (
    <Carousel>
      {data.map((item) => (
        <Carousel.Item
          key={item._id}
          interval={item.interval}
          className="carousel-item"
        >
          <img className="d-block w-100" src={item.source} alt={item.alt} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;
