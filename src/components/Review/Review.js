import React from 'react';
import useCart from '../../hooks/useCart';
import useProduct from '../../hooks/useProduct';
import { deleteFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ProductReview from '../productReview/ProductReview';

const Review = () => {
const [products]=   useProduct();
const [cart,setCart]= useCart(products)
const handleRemove=(key)=>{
  const newCart=  cart.filter(product=>product.key!==key);
  setCart(newCart);
deleteFromDb(key);
}
    return (
        <div className="shop-container">
            <div className="product-container">
               {cart.map(product=><ProductReview key={product.key} product={product} handleRemove={handleRemove}></ProductReview>)}
            </div>
            <div className="review-container">
            <Cart cart={cart}></Cart>
            </div>
          

        </div>
    );
};

export default Review;