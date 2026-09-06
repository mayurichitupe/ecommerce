import React, { Component } from 'react'
import {Product1,Product2,Product3,product4} from './Products'

export default class App extends Component {
  render() {
    return (
      <>
      <h1 className="text-primary bg-dark text-center p-2">
        React ECommerce App
      </h1>

      <div className="container">
        <div className="row">
          <div className="col-3">
            <Products
              imgPath="images/headphone.webp"
              pTitle="sample Headphone"
            />
          </div>

          <div className="col-3">
            <Products
              imgPath="images/headphone2.webp"
              pTitle="sample Headphone"
            />
          </div>

          <div className="col-3">
            <Products
              imgPath="images/hoodie1.webp"
              pTitle="sample Hoodie"
            />
          </div>

          <div className="col-3">
            <Products
              imgPath="images/hoodie2.webp"
              pTitle="sample Hoodie"
            />
          </div>
        </div>
      </div>
      </>
    )
  }
}

//rafce
// import React from 'react'

// const App = (props) => {
//   console.log(props);
//   return (
//     <>
//     <div className="card">
//       <img src={props.imgPath} alt="" />
//       <div className="card-body">
//         <h2>{props.pTitle}</h2>
//         <p>
//           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas eius eaque reiciendis dignissimos? Natus quod delectus aspernatur ipsam dolores labore.
//         </p>
//       </div>
//     </div>
    
//     </>
   
//   );
// };

// export default App;

