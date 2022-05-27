import React from "react";
import "../styles/testimonial-section.scss";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import TestimonialText from "./TestimonialText";

const TestimonialSection = () => {
  return (

    <div className="testimonial-section">
      <p className="testimonial-heading">Our customers says</p>
      <div className="testimonial-button">
        Button <BsChevronRight size="0.7rem" color="#6A983C" />
      </div>
      <div className="testimonial_left-btn">
        <BsChevronLeft color="#FFFFFF" />
      </div>
      <TestimonialText />
      <TestimonialText
        testimonialText="There is no one who loves pain itself, xyz abc def ghi jkl mno pqr stu vwx yzwho seeks after it and wants to have it, simply because it is pain..."
        testimonialAuthor="Amit Mishra"
      />
      <TestimonialText
        testimonialText="Neque porro quisquam est qui dolorem ipsum quia xyz abc def ghi jkl mno pqr stu vwx yz abc def ghi jkl dolor sit amet, consectetur, adipisci velit..."
        testimonialAuthor="Jay Sean"
      />
      <TestimonialText />
      <TestimonialText />
      <div className="testimonial_right-btn">
        <BsChevronRight color="#FFFFFF" />
      </div>
    </div>

  );
};



export default TestimonialSection;
