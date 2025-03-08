import "./About.css";
const About = () => {
  return (
    <section className="about section">
      <div className="section__title">
        <h2 className="section__header">about us</h2>
        <h3 className="section__description">
          Shaping the future with smart technology and innovative solutions.
        </h3>
      </div>
      <div className="about__content">
        <figure className="about__image"></figure>
        <div className="about__details">details</div>
      </div>
    </section>
  );
};

export default About;
