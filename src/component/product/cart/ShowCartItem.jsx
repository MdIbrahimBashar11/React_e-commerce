import { Delete, Image } from "@mui/icons-material";
import React, { useState } from "react";
import { useSelector } from "react-redux";

function ShowCartItem(props) {
  
    const { img, price, wholePrice, shipping,
        name ,star , stock , starCount, category , id } = props.pd;
       

    //Increment
    const [Inprice , setInprice] = useState(price);
    const [count , setCount] = useState(1);

    const handelIncress = () => {
      
      const count = 1 + 1;
      const total = price + price;
      
      setInprice(total)
      setCount(count);
    }
    const handelDecress = () => {
      const count = 1 - 0;
      const prices = price - 0;
      setInprice(prices);
      setCount(count); 
  }

  // const DeleteItem = (itemId) => {
  //   dispatch(removeFromCart(itemId));
  // };
  const DeleteItem = () => {
    localStorage.removeItem('localStorage-cart', JSON.stringify(props.pd));
  }
    const Subtotal = Inprice + shipping;
    const total = Subtotal.toFixed(2);
  return (
    <div className="container  my-4" key={id}>
    <div className="row">
      <div className="col-md-12 col-sm-12">
        <table className="table table-bordered">
          <thead>
           <tr>
           <th style={{maxWidth: '200px'}}>Name</th>
             <th>Image <Image size='larze' className="text-center" /></th>
            <th>Price</th>
            <th>Cost</th>
            <th>Quantity</th>
            <th>Total Price</th>
           </tr>
          </thead>
          <tbody>
              <tr  >
                  <td style={{fontSize: '12px'}}><b>Name: </b>{category}</td>
                  <td><img style={{width: '60px'}} src={img} alt="" /></td>
                  <td><b>Price:</b> {Inprice}</td>
                  <td><b>Cost: </b>{shipping}</td>
                  <td >
                    <button onClick={() => {
                      return handelIncress(price)
                    }} className="btn btn-dark my-3 m-2 px-2">+</button>
                    <button className="btn btn-success">{count}</button>
                    <button  onClick={() => handelDecress(id)} className="btn btn-dark my-3 m-2 px-2">-</button>
                    <button className="btn btn-danger" onClick={() => {
                        DeleteItem(id)
                    }}><Delete /></button>
                  </td>
                  <td><b>Total</b> {total}</td>
                </tr>
          </tbody>
          <thead>
            
          </thead>
        </table>
      </div>
    </div>
    
  </div>
  
      
   
  );
}

export default ShowCartItem;
