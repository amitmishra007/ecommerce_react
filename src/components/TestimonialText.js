import React from "react";
import "../styles/testimonial-text-style.scss";

const TestimonialText = ({
  testimonialText = "This is an super space for your customers qoute. Don’t worry it works smooth as pie. You will get all what you need by writiing a text here ",
  testimonialAuthor = "Name and Surname",
}) => {
  return (
    <>
      <div className="testimonial-container">
        <p className="testimonial-text">“ {testimonialText} “</p>
        <div className="author">{testimonialAuthor}</div>
      </div>
    </>
  );
};

export default TestimonialText;
