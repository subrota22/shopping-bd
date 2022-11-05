import React from 'react';
import "./Product.css" ;
import {BsCartFill} from "react-icons/bs" ;
const Prouduct = ({product , handleOnClick}) => {
const {img , name , price , quantity ,ratings ,ratingsCount , seller , shipping } = product ;
    return (
        <div className='products'  data-aos="zoom-in">
       <img src={img} alt="productImage" id='productImage'/>
       <div className="product-text">
        <p>Product Name : {name} </p>
        <p>Price : {price} </p>
        <p> Quantity : {quantity} </p>
        <p> Ratings : {ratings} </p>
        <p> Ratings count : {ratingsCount} </p>
        <p> Seller : {seller} </p>
        <p> Shipping : {shipping} </p>
       </div>
       <button className='cart-button' onClick={() => (handleOnClick(product)) }> 
       <span style={{margin:"0px 8px"}}>Add to cart</span> <BsCartFill/> 
       </button>
        </div>
    );
};

export default Prouduct;