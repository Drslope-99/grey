import "./Services.css";
import { FaCode } from "react-icons/fa6";
import AppImage from "../../assets/appui.png";
const Services = () => {
  return (
    <section className="service section">
      {" "}
      <div className="section__title">
        <h2 className="section__header">our services</h2>
        <h3 className="section__description">
          Shaping the future with smart technology and innovative solutions.
        </h3>
      </div>
      <div className="service__content">
        <figure className="service__img">
          <img src={AppImage} alt="App development" />
        </figure>
        <article className="service__details">
          <div className="service__icon">
            <FaCode className="code__icon" />
          </div>
          <h5 className="service__header">App development services</h5>
          <p className="service__description">
            In today's digital age, mobile apps have become an essential tool
            for businesses, organizations and individulas to reach their target
            audience. At Greystones Engineering Company, we specialize in
            designing and developing custom mobile apps that meet our clients
            unique needs and goals.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Services;
