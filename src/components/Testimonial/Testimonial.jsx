import { useState, useEffect } from "react";
import TestimonialContent from "./TestimonialContent/TestimonialContent";
import reviews from "./data.json";
import "./Testimonial.css";

const Slider = ({ items }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  function prevSlide() {
    setSlideIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  }

  function nextSlide() {
    setSlideIndex((prev) => (prev >= items.length - 1 ? 0 : prev + 1));
  }

  useEffect(() => {
    const interval = setInterval(() => nextSlide(), 10000);

    return () => clearInterval(interval);
  });

  return (
    <div className="slider">
      <div className="slides">
        {items.map((item) => (
          <TestimonialContent
            slide={slideIndex}
            comment={item.comments}
            author={item.author}
            location={item.location}
            key={item.id}
          />
        ))}
      </div>

      <button className="slider__btn slider__btn--left" onClick={prevSlide}>
        &larr;
      </button>
      <button className="slider__btn slider__btn--right" onClick={nextSlide}>
        &rarr;
      </button>
      <div className="slider__indicator">
        {items.map((item, index) => (
          <button
            className={`slider__dot${slideIndex === index ? " active" : ""}`}
            key={item.id}
            onClick={() => setSlideIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

const Testimonial = () => {
  return (
    <section className="testimonial section" id="testimonial">
      <div className="section__title section__title--testimonials">
        <h2 className="section__header">Testimonials</h2>
        <h3 className="section__description">
          Don't just take our words for it, here's what some of our customers
          have to say
        </h3>
      </div>

      <Slider items={reviews} />
    </section>
  );
};

export default Testimonial;
