import { Star } from '@mui/icons-material';
import { Rating } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Phone() {
    const products = useSelector((state) => state.allProducts.products);
    
    const renderList = products.map((pd) => {
            const {category ,  id , img, price ,  star} = pd; 
      if (pd.category === 'android') {
        return (
          <div className="col-md-4" key={id}>
          <Link to={`/product/${id}`} key={pd.id}>
              <div className="py-3 m-2">
                  <div className="card p-2">
                      <div className="card-body">
                        <img src={img} alt="" className='img-card img-fluid' />
                      </div>
                      <div className="card-footer">
                         <h4>{
                            category   
                            }
                          </h4>
                         <div className="row">
                          <div className="col-md-6 col-sm-12">
                              <h6><b>Price:</b> ${price}</h6>
                          </div>
                          <div className="col-md-6  col-sm-12">
                                            <Rating 
                                  value={star}
                                icon={<Star fontSize='inherit' color='danger' />}
                                // precision={3}
                                readOnly />
                          </div>
                         </div>
                      </div>
                  </div>
              </div>
              </Link>
          </div>
        )
      }
       
       })
  return (
    <div>
         <div className="container">
            <div className="row">
            {renderList}
            </div>
         </div>
    </div>
  )
}


export default Phone