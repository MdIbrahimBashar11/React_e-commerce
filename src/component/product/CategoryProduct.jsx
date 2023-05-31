import { Laptop, Phone } from '@mui/icons-material';
import React from 'react'
import { useSelector } from 'react-redux';
import img from '../../img/camera.png';
import img1 from '../../img/phone.png';
import img2 from '../../img/laptop.png';
import { Link } from 'react-router-dom';

function CategoryProduct() {
    const products = useSelector((state) => state.allProducts.products);
    console.log(products);
  return (
    <div>
       <div className="container">
             <h2>Category of Product</h2>
            <div className="row">
            
                <div className="col-md-4">
                <Link to='/camera'>
                    <div className="card m-2">
                        <div className="card-body">
                            <img src={img} alt="" />
                        </div>
                        <div className="card-footer">
                            <h2>Camera</h2>
                            <b>Lorem ipsum dolor sit amet consectetur adipisicing
                                 elit. Suscipit, veritatis.</b>
                                 <br />
                                 <br />
                        </div>
                    </div>
                    </Link>
                </div>
             
                <div className="col-md-4">
                    <Link to='phone'>
                    <div className="card m-2">
                        <div className="card-body">
                            <img src={img1} alt="" />
                        </div>
                        <div className="card-footer">
                            <h2>Phone</h2>
                            <b>Lorem ipsum dolor sit amet consectetur adipisicing
                                 elit. Suscipit, veritatis.</b>
                                 <br />
                                 <br />
                        </div>
                    </div>
                    </Link>
                </div>
                <div className="col-md-4">
                   <Link to='laptop'>
                   <div className="card m-2">
                        <div className="card-body">
                            <img src={img2} alt="" />
                        </div>
                        <div className="card-footer">
                            <h2>Laptop</h2>
                            <b>Lorem ipsum dolor sit amet consectetur adipisicing
                                 elit. Suscipit, veritatis.</b>
                                 <br />
                                 <br />
                        </div>
                    </div>
                   </Link>
                </div>
            </div>
       </div>
    </div>
  )
}

export default CategoryProduct