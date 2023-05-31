import React from 'react'
import { useSelector } from 'react-redux'

import Product from './Product';

function ProductList() {
    const products = useSelector((state) => state.allProducts.products);
  return (
    <div>
       <div className="container">
        <div className="row">
          <h2>Product</h2>
         <Product key={products.id} />
            </div>
       </div>
    </div>
  )
}

export default ProductList