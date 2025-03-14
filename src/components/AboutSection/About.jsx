import "./About.css";
import aboutui from "../../assets/aboutui.jpg";
import handshake from "../../assets/handshake.jpg";
const About = () => {
  return (
    <section className="about section" id="about">
      <div className="section__title">
        <h2 className="section__header">Who we are</h2>
        <h3 className="section__description">
          Shaping the future with smart technology and innovative solutions.
        </h3>
      </div>
      <div className="about__content">
        <figure className="about__image">
          <img src={aboutui} alt="about image" className="about__image--1" />
          <img src={handshake} alt="about image" className="about__image--2" />
        </figure>
        <div className="about__details">
          <p className="about__description">
            Greystones engineering is a multifaceted company specializing in web
            and mobile application development, engineering projects and real
            estate construction. with a passion for innovation ad excellence, we
            deliver cutting-edge digital solutions while also focusing on
            <em> building affordable housing for low-income earners</em>.
          </p>

          <p className="about__description">
            Our expertise spans across technology and infrastructure, allowing
            us to create solutions that not only drives business growth, but
            also makes a positive impact on the society. At Greystones
            Engineering, we are committed to transforming ideas into reality and
            improving lives through technology and construction.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
