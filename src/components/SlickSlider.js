import React, { Component } from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import "../styles/testimonial-section.scss";
import Slider from "react-slick";
import TestimonialText from "./TestimonialText";

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    };
    return (
      <div className="container testimonial__area">
        <h2> Our Customer Says </h2>
        <div className="testimonial-button testimonial_left-btn">
          <BsChevronLeft size="0.7rem" color="#6A983C" />
        </div>
        <Slider {...settings}>
          <div>
            <h3>
              <TestimonialText
                testimonialText="There is no one who loves pain itself, xyz abc def ghi jkl mno pqr stu vwx yzwho seeks after it and wants to have it, simply because it is pain..."
                testimonialAuthor="Amit Mishra"
              />
            </h3>
          </div>
          <div>
            <h3>
              <TestimonialText />
            </h3>
          </div>
          <div>
            <h3>
              <TestimonialText
                testimonialText="Neque porro quisquam est qui dolorem ipsum quia xyz abc def ghi jkl mno pqr stu vwx yz abc def ghi jkl dolor sit amet, consectetur, adipisci velit..."
                testimonialAuthor="Jay Sean"
              />
            </h3>
          </div>
          <div>
            <h3>
              <TestimonialText />
            </h3>
          </div>
          <div>
            <h3>
              <TestimonialText />
            </h3>
          </div>
          <div>
            <h3>
              <TestimonialText />
            </h3>
          </div>
          <div>
            <h3>
              <TestimonialText />
            </h3>
          </div>
          <div>
            <h3>
              <TestimonialText />
            </h3>
          </div>
          <div>
            <h3>
              <TestimonialText />
            </h3>
          </div>
        </Slider>
        <div className="testimonial-button ">
          <BsChevronRight size="0.7rem" color="#6A983C" />
        </div>
      </div>
    );
  }
}
