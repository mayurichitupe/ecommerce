import React, { Component } from "react";
import Products from "./Products";

export class App extends Component {
  render() {
    return (
      <>
        <h1 className="text-primary bg-dark text-center p-2">
          Reusing React Components
        </h1>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <Products
                imgPath="images/hoodie1.webp"
                pTitle="Sample Hoodie"
              />
            </div>
            <div className="col-3">
              <Products imgPath="images/hoodie2.webp" pTitle="Sample Hoodie" />
            </div>
            <div className="col-3">
              <Products imgPath="images/shoes.webp" pTitle="Sample Shoes" />
            </div>
            <div className="col-3">
              <Products imgPath="images/watch2.webp" pTitle="Sample Watch" />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
