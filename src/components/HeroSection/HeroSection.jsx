import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero section">
      <div className="hero__section hero__section--1">
        <h1 className="hero__heading">
          Smart solutions, <br />
          Seamless Innovations.
        </h1>
        <div className="hero__description">
          <p className="hero__text">
            Providing innovative solutions tailored to your needs. From app
            development to real estate and other IT services. We are focused on
            transforming your ideas to reality through cutting edge engineering
            and technologically driven solutions.
          </p>
        </div>
        <div className="hero__cta">
          <button className="hero__btn">See our work</button>
          <button className="hero__btn">Get a Quote</button>
        </div>
      </div>
      <div className="hero__section hero__section--2">
        {/* <h1>some images</h1> */}
      </div>
    </section>
  );
};

export default HeroSection;
