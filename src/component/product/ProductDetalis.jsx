import {  ShoppingCart, Star } from "@mui/icons-material";
import { Rating } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import img1 from '../../img/ezgif-4-96f8cb4172.jpg';
import { setCartItem } from "../../redux/action/productAct";
function ProductDetalis() {

  const { id } = useParams();
  //get data
  const products = useSelector((state) => state.allProducts.products);
  //find id by data 
  const product = products.find((item) => item.id == id);
  const { img, price, wholePrice, shipping,
     name ,star , stock , starCount } = product;
 
  //Add Cart Function
  const [cart, setCart] = useState([]);
   localStorage.setItem('cart', JSON.stringify(cart));
  const handleAddToCart = (id) => {
  const product = products.find((item) => item.id == id);
   const localCart =  localStorage.getItem('cart');
    const finalLocalCart =  JSON.parse(localCart);
     const newCart = [...finalLocalCart , product]
     const finalNewCart = [...newCart];
     setCart(finalNewCart);
     localStorage.setItem('localStorage-cart', JSON.stringify(finalNewCart));
  }
  console.log(cart);
  //Cart Item Add Redux
  const dispatch = useDispatch();
  dispatch(setCartItem(cart));

  
  return (
    <div className="container">
      <div className="row">
        <div  className="col-md-8 col-sm-12 mx-auto">
          <div className="py-4">
            <div className="cards shadow p-3">
              <img className="detailsimg" src={img} alt="Img" />
              <h5 className="py-3 mt-2"><b>Name:</b> {name}</h5>
                <div className="row">
                  <div className="col-md-6">
                     <p className="mt-2"><b>Price: $</b>{price}</p>
                  </div>
                  <div className="col-md-6">
                     <p className="mt-2"><b>Discount Price: </b>{wholePrice}</p>
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-md-6">
                     <p><b>Shipping Cost: </b>{shipping}</p>
                  </div>
                  <div className="col-md-6">
                      <Rating 
                          value={star}
                          icon={<Star fontSize='inherit' color='danger' />}
                          readOnly />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                     <p className="mt-2"><b>Stock: </b>{stock}</p>
                  </div>
                  <div className="col-md-6">
                     <p className="mt-2"><b>Total Star: </b>{starCount}</p>
                  </div>
                </div>
              <div className="text-center my-3">
              <button onClick={() => handleAddToCart(id)}
                style={{ color: "#dbb82e" , border: '1px solid #dbb82e'}} 
              className="btn p-2 mb-2 text-center">Add to  Cart <ShoppingCart 
              style={{ color: "#dbb82e" , marginLeft: '7px'}}  /></button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ProductDetalis;
