import React from "react";
import "./Card.css";

const Products = (props) => {
  console.log(props);
  return (
    <>
      <div className="col-3">
      <div className="card">
        <img src={props.imgPath} alt="" />
        <div className="card-body">
          <h2>{props.pTitle}</h2>
          <p className="info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            saepe debitis commodi quibusdam neque praesentium doloribus, numquam
            aliquid beatae sequi.
          </p>
        </div>
      </div>
      </div>
    </>
  );
};

export default Products;