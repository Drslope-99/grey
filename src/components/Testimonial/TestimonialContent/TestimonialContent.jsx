import "./TestimonialContent.css";
const TestimonialContent = ({ comment, author, location, slide }) => {
  return (
    <div
      className="testimonial__content"
      style={{ translate: `${-100 * slide}%` }}
    >
      <blockquote className="testimonial__text">{comment}</blockquote>
      <address className="testimonial__author">
        <h6 className="testimonial__name">- {author}</h6>
        <p className="testimonial__location">{location}</p>
      </address>
    </div>
  );
};

export default TestimonialContent;
