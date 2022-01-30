import React from 'react';
import './SingleProduct.css'

const SingleProduct = (props) => {
   const {img,name,seller,price,stock}=props.product;
   const{features}=props.product;
  
    return (
       <div className="container">

 <div className="product-image">
     <img src={img} alt="" srcset="" />
 </div>
 <div className="details">
   <h3> <a href="#">{name}</a></h3>
     <p>by:{seller} </p>
       <div className="button-container">
           <div className="button">
               <p>price ${price}</p>
               <p>only {stock} left-order soon </p>
               <button onClick={props.onclick}>Add To Cart</button>
           </div>
           <div className="feater">
               <h5>Features</h5>
               <ul>
                  {/* {features.map(f=><li>{f.description}:{f.value}</li>)} */}
               </ul>
           </div>
       </div>
 </div>

       </div>
    );
};

export default SingleProduct;