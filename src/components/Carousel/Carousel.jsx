import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

import "./Carousel.css";

const Carousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideRight = () => {
    setCurrentSlide((cur) => (cur + 1) % images.length);
    console.log(currentSlide);
  };

  const slideLeft = () => {
    setCurrentSlide((cur) => (cur > 0 ? cur - 1 : images.length - 1));
    console.log(currentSlide);
  };

  return (
    <div className="carousel">
      <div className="carousel__wrapper">
        {images.map((image, index) => (
          <div
            className={`carousel__card ${
              index == currentSlide ? "carousel__card--active" : ""
            }`}
            key={index}
          >
            <img src={image.src} alt={image.title} />
            <div className="card__overlay">
              <h3 className="card__title">{image.title}</h3>
            </div>
          </div>
        ))}
        <button
          className="carousel__btn carousel__btn--left"
          onClick={slideLeft}
        >
          <FaAngleLeft />
        </button>
        <button
          className="carousel__btn carousel__btn--right"
          onClick={slideRight}
        >
          <FaAngleRight />
        </button>
        <div className="carousel__indicator">
          {images.map((image, index) => (
            <span
              className={`indicator ${
                index == currentSlide ? "indicator--active" : ""
              }`}
              key={index}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
