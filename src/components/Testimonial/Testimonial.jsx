import "./Testimonial.css";
import Carousel from "../Carousel/Carousel";
import { images } from "../Carousel/Data";

const Testimonial = () => {
  return (
    <section className="testimonial section">
      <div className="section__title section__title--testimonials">
        <h2 className="section__header">Testimonials</h2>
        <h3 className="section__description">
          Don't just take our words for it, here's what some of our customers
          have to say
        </h3>
      </div>
      <Carousel images={images} />
    </section>
  );
};

export default Testimonial;

/* <div className="slider">
        <div class="slide">
          <div class="testimonial">
            <h5 class="testimonial__header">
              Finally free from old-school banks
            </h5>
            <blockquote class="testimonial__text">
              Debitis, nihil sit minus suscipit magni aperiam vel tenetur
              incidunt commodi architecto numquam omnis nulla autem,
              necessitatibus blanditiis modi similique quidem. Odio aliquam
              culpa dicta beatae quod maiores ipsa minus consequatur error sunt,
              deleniti saepe aliquid quos inventore sequi. Necessitatibus id
              alias reiciendis, perferendis facere.
            </blockquote>
            <address class="testimonial__author">
              <img src="img/user-3.jpg" alt="" class="testimonial__photo" />
              <h6 class="testimonial__name">Francisco Gomes</h6>
              <p class="testimonial__location">Lisbon, Portugal</p>
            </address>
          </div>
        </div>
      </div> */
