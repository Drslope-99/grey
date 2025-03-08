import "./Services.css";
import { FaCode } from "react-icons/fa6";
import AppImage from "../../assets/deliveryui.jpg";
import devImage from "../../assets/bghero.jpg";
const Services = () => {
  return (
    <>
      <section className="service section">
        <div className="section__title">
          <h2 className="section__header">what we do</h2>
          <h3 className="section__description">
            Crafting Innovative software solutions for a digital future.
          </h3>
        </div>
        <div className="service__content">
          <figure className="service__img">
            <img src={devImage} alt="App development" />
          </figure>
          <article className="service__details">
            <div className="service__icon">
              <FaCode className="code__icon" />
            </div>
            <h5 className="service__header">
              Smart & seamless app development
            </h5>
            <p className="service__description">
              In today's digital age, mobile apps have become an essential tool
              for businesses, organizations and individulas to reach their
              target audience. At Greystones Engineering Company, we specialize
              in designing and developing custom mobile apps that meet our
              clients unique needs and goals.
            </p>
          </article>
        </div>
        <div className="service__content service__app-dev">
          <div className="service__details">
            <h3 className="service__header service__header--app">
              Our App Development Process
            </h3>
            <p className="service__description service__description--app">
              At Greystones Engineering, our team of expert developers,
              designers and project managers follow a structured approach to
              deliver seamless and efficient app development.
            </p>
            <ul className="dev">
              <li>
                <article class="dev__process">
                  <p className="step">
                    <span className="step__text">step</span>
                    <span className="step__num">01</span>
                  </p>
                  <h3 className="step__header">consultation</h3>
                  <p className="step__description">
                    we work closely with our clients to understand their idea,
                    goals and target audience
                  </p>
                </article>
              </li>

              <li>
                <article class="dev__process">
                  <p className="step">
                    <span className="step__text">step</span>
                    <span className="step__num">02</span>
                  </p>
                  <h3 className="step__header">strategy</h3>
                  <p className="step__description">
                    our team develops a customized app strategy including
                    wireframing, prototyping and technical planning
                  </p>
                </article>
              </li>

              <li>
                <article class="dev__process">
                  <p className="step">
                    <span className="step__text">step</span>
                    <span className="step__num">03</span>
                  </p>
                  <h3 className="step__header">design</h3>
                  <p className="step__description">
                    we create visually appealling and user-friendly desingns
                    that aligns with our client's brand identity
                  </p>
                </article>
              </li>

              <li>
                <article class="dev__process">
                  <p className="step">
                    <span className="step__text">step</span>
                    <span className="step__num">04</span>
                  </p>
                  <h3 className="step__header">development</h3>
                  <p className="step__description">
                    our developers build the app using the latest technologies
                    and programming languages.
                  </p>
                </article>
              </li>

              <li>
                <article class="dev__process">
                  <p className="step">
                    <span className="step__text">step</span>
                    <span className="step__num">05</span>
                  </p>
                  <h3 className="step__header">Testing</h3>
                  <p className="step__description">
                    we conduct thorough testing to ensure that the app is bug
                    free, stable and meets our quality of standard.
                  </p>
                </article>
              </li>

              <li>
                <article class="dev__process">
                  <p className="step">
                    <span className="step__text">step</span>
                    <span className="step__num">06</span>
                  </p>
                  <h3 className="step__header">Launch</h3>
                  <p className="step__description">
                    we assist with app deployment, marketting and maintainance
                    to ensure its success.
                  </p>
                </article>
              </li>
            </ul>
          </div>
          <figure className="service__img service__app-img">
            <img src={AppImage} alt="App development" />
          </figure>
        </div>
      </section>
      <section className="app section"></section>
    </>
  );
};

export default Services;
