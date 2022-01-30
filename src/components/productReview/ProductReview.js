import React from 'react';

const ProductReview = (props) => {

    const{name,price,quantity,key}=props.product;
    

    return (
        <div className="details">
        <h3> {name}</h3>
        <p>Price ${price}</p>
        <p>Quantity ${quantity}</p>
        <button onClick={()=>{props.handleRemove(key)}} >Remove</button>
            
        </div>
    );
};

export default ProductReview;