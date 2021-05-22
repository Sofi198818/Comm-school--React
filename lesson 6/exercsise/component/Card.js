import React from "react";

function Card(props) {
  return (
    <div className="shopping-item">
      <h1>{props.title}</h1>
      <img src={props.src} alt="123" />
      <div className="description">
        <span>In Stock</span>
        <span>3.5/5</span>
      </div>
      <div className="badges">
        <span className="badge-1">sport</span>
        <span className="badge-2">lifestyle</span>
      </div>
      <button>Add To Cart</button>
    </div>
  );
}

export default Card;
