import React from "react";
import Button from "./Button";
import "../styles/product-card.scss";

const ProductCard = ({
  image = "https://www.dudafresh.com/hubfs/images-2017/p-main-broccoli.png",
  discount = 16,
  title = "Broccoli",
  caption = "Raw broccoli contains almost 90% water, 7% carbs, 3% protein, and almost no fat.",
  rating,
  dPrice = 36.66,
  aPrice = 46.69,
}) => {
  return (
    <>
      <div className="product-card">
        <div className="image">
          <img src={image} alt="broccoli_image" />
        </div>
        <div className="details">
          <div className="discount">-{discount}%</div>
          <div className="title">{title}</div>
          <div className="caption">{caption}</div>
          <div className="rating"></div>
          <div className="product_footer">
            <div className="pricenbuy">
              <div className="discounted-price"> {dPrice} USD</div>
              <div className="actual-price">{aPrice} USD</div>
            </div>
            <Button size="small" filled={true} title="Buy Now" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
