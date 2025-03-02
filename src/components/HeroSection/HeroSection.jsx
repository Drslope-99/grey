import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero section">
      <div className="hero__section hero__section--1">
        <h1 className="hero__heading">
          Building dreams,
          <br /> deliverying solutions
        </h1>
        <p className="hero__description">
          Providing innovative solutions tailored to your needs. From app
          development to real estate rentals and other IT services. We are
          focused on transforming your ideas to reality through cutting edge
          engineering and technologically driven solutions.
        </p>
        <div className="hero__cta">
          <button className="hero__btn">See our work</button>
          <button className="hero__btn">Get a Quote</button>
        </div>
      </div>
      <div className="hero__section hero__section--2">
        <h1>hero section 2</h1>
      </div>
    </section>
  );
};

export default HeroSection;
