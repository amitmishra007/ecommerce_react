import React from "react";
import "../styles/button-style.scss";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Button = ({
  size = "large",
  filled = false,
  arrow,
  title = "Button",
}) => {
  return (
    <>
      <button
        type="button"
        className={`main-btn ${
          size === "large"
            ? "btn-large"
            : size === "medium"
            ? "btn-medium"
            : "btn-small"
        } ${filled ? "filled" : ""}`}
      >
        <span className="btn-icon-container left-arrow-btn">
          {arrow === "left" ? <AiOutlineLeft className="left-arrow" /> : null}
        </span>
        <span>{title}</span>
        <span className="btn-icon-container right-arrow-btn">
          {arrow === "right" ? (
            <AiOutlineRight className="right-arrow" />
          ) : null}
        </span>
      </button>
    </>
  );
};

export default Button;
