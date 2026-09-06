import React, { Component } from 'react'

import {
    allProducts,
    fashionArray,
    bagArray,
    makeupArray,
    footwareArray,
    electArray,
    bikeArray,
    watchArray,
    chainArray,
    hoodieArray
}from './ProductList';

import Products from "./components/Products";



export class App extends Component {
    constructor(){
        super();
        this.state = {
            allpshow:true,
            Fshow:false,
            bagshow:false,
            makeupshow:false,
            footshow:false,
            electshow:false,
            bikeshow:false,
            watchshow:false,
            chainshow:false,
            hoodieshow:false
        };
    }

  render() {
    return (
      <>
        <h1 className="text-warning bg-dark text-center p-2">Ecommerce Conditional rendering</h1>
        
        <div className="container">
            
            <div className="btn-group">
              <button className="btn btn-primary" onClick={()=>{
                this.setState({
                  allpshow:true,
                  Fshow:false,
                  bagshow:false,
                  makeupshow:false,
                  footshow:false,
                  electshow:false,
                  bikeshow:false,
                  watchshow:false,
                  chainshow:false,
                  hoodieshow:false
                });
              }}
              >all products</button>

              <div className="dropdown">
              <button 
              className="btn btn-secondary dropdown-toggle" type="button" 
              data-bs-toggle="dropdown" 
              aria-expanded="false"
              >Fashion</button>

    <ul className="dropdown-menu">
    <li>
      <button
        className="dropdown-item"
        onClick={() => {
          this.setState({
            allpshow: false,
            Fshow: false,
            bagshow: true,
            makeupshow: false,
            footshow: false,
            electshow: false,
            bikeshow: false,
            watchshow: false,
            chainshow:false,
            hoodieshow:false
          });
        }}
      >
        Bags
      </button>
    </li>

    <li>
      <button
        className="dropdown-item"
        onClick={() => {
          this.setState({
            allpshow: false,
            Fshow: false,
            bagshow: false,
            footshow: true,
          });
        }}
      >
        Footwear
      </button>
    </li>

    <li>
      <button
        className="dropdown-item"
        onClick={() => {
          this.setState({
            allpshow: false,
            Fshow: false,
            bagshow: false,
            footshow: false,
            chainshow:true,
            hoodieshow:false

          });
        }}
      >
        chain
      </button>
    </li>

    <li>
      <button
        className="dropdown-item"
        onClick={() => {
          this.setState({
            allpshow: false,
            Fshow: false,
            bagshow: false,
            footshow: false,
            chainshow:false,
            hoodieshow:true
          });
        }}
      >
        Hoodies
      </button>
    </li>
  </ul>
</div>

              <button className="btn btn-danger"
              onClick={()=>{
                this.setState({
                  allpshow:false,
                  Fshow:false,
                  bagshow:false,
                  makeupshow:true,
                  footshow:false,
                  electshow:false,
                  bikeshow:false,
                  watchshow:false,
                  chainshow:false,
                  hoodieshow:false
                });
              }}
              >makeup</button>
              
              <div id="foot"
              /* <button className="btn btn-warning" */
              onClick={()=>{
                this.setState({
                  allpshow:false,
                  Fshow:false,
                  bagshow:false,
                  makeupshow:false,
                  footshow:true,
                  electshow:false,
                  bikeshow:false,
                  watchshow:false,
                  chainshow:false,
                  hoodieshow:false
                });
              }}
                 // >footwear</button>
              ></div>

              <button className="btn btn-info"
              onClick={()=>{
                this.setState({
                  allpshow:false,
                  Fshow:false,
                  bagshow:false,
                  makeupshow:false,
                  footshow:false,
                  electshow:true,
                  bikeshow:false,
                  watchshow:false,
                  chainshow:false,
                  hoodieshow:false
                });
              }}
              >electronics</button>

              <button className="btn btn-light"
              onClick={()=>{
                this.setState({
                  allpshow:false,
                  Fshow:false,
                  bagshow:false,
                  makeupshow:false,
                  footshow:false,
                  electshow:false,
                  bikeshow:true,
                  watchshow:false,
                  chainshow:false,
                  hoodieshow:false
                });
              }}
              >bikes</button>
              <button className="btn btn-dark"
              onClick={()=>{
                this.setState({
                  allpshow:false,
                  Fshow:false,
                  bagshow:false,
                  makeupshow:false,
                  footshow:false,
                  electshow:false,
                  bikeshow:false,
                  watchshow:true,
                  chainshow:false,
                  hoodieshow:false
                });
              }}
              >watches</button>
            </div><br />
            
            <div className="row">
              {
                this.state.allpshow ?allProducts.map((val,index) =>{
                  return(
                    <Products imgPath={val.imgPath} pTitle={val.pTitle} />
                  )
                }):this.state.Fshow ?fashionArray.map((val,index)=>{
                  return(
                    <Products imgPath={val.imgPath} pTitle={val.pTitle}/>
                  )
                }):this.state.bagshow?bagArray.map((val,index)=>{
                  return(
                    <Products imgPath={val.imgPath} pTitle={val.pTitle}/>
                  )
                }):this.state.makeupshow ?makeupArray.map((val,index)=>{
                  return(
                    <Products imgPath={val.imgPath} pTitle={val.pTitle}/>
                  )
                }):this.state.footshow ?footwareArray.map((val,index)=>{
                  return(
                    <Products imgPath={val.imgPath} pTitle={val.pTitle}/>
                  )
                }):this.state.electshow ?electArray.map((val,index)=>{
                  return(
                    <Products imgPath={val.imgPath} pTitle={val.pTitle}/>
                  )
                }):this.state.bikeshow ?bikeArray.map((val,index)=>{
                  return(
                    <Products imgPath={val.imgPath} pTitle={val.pTitle}/>
                  )
                }):this.state.watchshow ?watchArray.map((val,index)=>{
                  return(
                    <Products imgPath={val.imgPath} pTitle={val.pTitle}/>
                  )
                }):this.state.chainshow ?chainArray.map((val,index)=>{
                  return(
                    <Products imgPath={val.imgPath} pTitle={val.pTitle}/>
                  )
                }):this.state.hoodieshow ?hoodieArray.map((val,index)=>{
                  return(
                    <Products imgPath={val.imgPath} pTitle={val.pTitle}/>
                  )
                }): <p>Product not found</p>

              }
            </div>
        </div>
      </>
    )
  }
}

export default App
