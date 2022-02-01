import React from 'react';
import './Cart.css'
const Cart = (props) => {
let orderItem=0;
let total=0;
const cart=props.cart;
// console.log(props.cart)
// console.log(props.cart.price)
for(const product of cart){
   
   if(!product.quantity){
             product.quantity=1;
   }

 
  total=total+product.quantity*product.price;
  orderItem=orderItem+product.quantity;
  
  
}

 const shipping=total>0?15:0;
 const taxValue=(shipping+total)*.10;
const grandTotal=shipping+taxValue+total;
      
     
  
   
    return (
        <div>
            <div className="all-total">
            <h3>Order Summary</h3>
            <h4>Order Items:{orderItem}</h4>
             <p>total:{total.toFixed(2)}</p>
              <p>Tax:{taxValue.toFixed(2)}</p>
              <p>Delivery charge:{shipping}</p>
              
            </div>
            <h3>Sub Total :{grandTotal.toFixed(2)}</h3>
           {props.children}
        </div>
    );
};

export default Cart;