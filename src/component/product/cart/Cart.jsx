
import { Link } from 'react-router-dom';
import EmptyCart from './EmptyCart';
import ShowCartItem from './ShowCartItem';

function Cart() {
  
  
     const storedCart = localStorage.getItem('localStorage-cart');
     const storageCarts =  JSON.parse(storedCart);
    
  return ( 
    <div>
           {
            storageCarts ? storageCarts.map((pd) => <ShowCartItem pd={pd} key={pd.id} />)
            : <EmptyCart/>
           }
              
         <div className=" container">
          <div className="row">
          <div className="col-md-6">
              <Link to='/' className='btn btn-outline-success borderd'>Chakout Product</Link>
          </div>
          </div>
         </div>
     </div>
  )
}

export default Cart