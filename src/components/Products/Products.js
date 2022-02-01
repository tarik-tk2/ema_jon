import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import SingleProduct from '../SingleProduct/SingleProduct';
import './Products.css';
const Products = () => {
    const [product,setProduct]=useState([]);
    const [cart,setCart]=useState([]);
    useEffect(
        ()=>{
            fetch('./fakeData/products.json')
  .then(response => response.json())
  .then(data => setProduct(data));
        },[]  
    );
   
  
    
    const handleItem=(product)=>{
        

const exist= cart.find(pd=>pd.key===product.product.key);
let newCart=[];
if(exist){
    const rest = cart.filter(pd=>pd.key!=product.product.key);
    exist.quantity=exist.quantity+1;
    newCart=[...rest,product.product]

}else{
    product.product.quantity=1;
   newCart=[...cart,product.product];
}


     
      
       setCart(newCart)
      
       addToDb(product.product.key)
    } 
    useEffect(()=>{
      const getCart=  getStoredCart();
       
         const cartList=[];
            for(const key in getCart) {  
                const findProduct=  product.find(product=>product.key===key);
               
        if(findProduct){
            const quantity=getCart[key];
            
            findProduct.quantity=quantity; 
            cartList.push(findProduct);
           
        }
                
               }
              
               setCart(cartList);
         
    },[product])
   
   
    return (
        <div className="shop-container">
      
            <div className="product-container">

             {product.map(product=><SingleProduct key={product.key} product={product} onclick={()=>handleItem({product})}/>)}
            </div>
            <div className="review-container">
                {/* {cart.map(cart=>console.log(cart.price))} */}
              <Cart cart={cart}>
                <Link to="/review"> <button>Review Your Order</button></Link>
              </Cart>
              
            </div>

        </div>
    );
};

export default Products;