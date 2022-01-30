import React, { useEffect, useState } from 'react';
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
       
        const newCart=[...cart,product];
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
              <Cart cart={cart}/>
              
            </div>

        </div>
    );
};

export default Products;