import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProduct from '../../hooks/useProduct';
import { clearTheCart, deleteFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ProductReview from '../productReview/ProductReview';


const Review = () => {
const [products]=   useProduct();
const [cart,setCart]= useCart(products)
const navigation= useNavigate();
const handleRemove=(key)=>{
  const newCart=  cart.filter(product=>product.key!==key);
  setCart(newCart);
deleteFromDb(key);
} 
const handleOrder=()=>{
    navigation('/perched');
    setCart([]);
   clearTheCart();
}
    return (
        <div className="shop-container">
            <div className="product-container">
               {cart.map(product=><ProductReview key={product.key} product={product} handleRemove={handleRemove}></ProductReview>)}
            </div>
            <div className="review-container">
            <Cart cart={cart}> <button onClick={()=>handleOrder()}>Purchase Order</button></Cart>
            </div>
          

        </div>
    );
};

export default Review;