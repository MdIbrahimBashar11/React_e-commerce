import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About from './component/about/About';
import Contact from './component/contact/Contact';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import Cart from './component/product/cart/Cart';
import Camera from './component/product/category/Camera';
import Laptop from './component/product/category/Laptop';
import Phone from './component/product/category/Phone';
import CategoryProduct from './component/product/CategoryProduct';
import ProductDetalis from './component/product/ProductDetalis';
import ProductList from './component/product/ProductList';
import { ALLproducts } from './products';
import { setProducts } from './redux/action/productAct';



function App() {
  const products = useSelector((state) => state.allProducts.products);
  //set Product
  const dispatch = useDispatch();
  dispatch(setProducts(ALLproducts));
  return (
    <div className="">
     <BrowserRouter>
     <Navbar/>
     <Routes>
     <Route  path='/' element={<CategoryProduct/>} />
        <Route  path='/product' element={<ProductList/>} />
        <Route  path='/product/:id' element={<ProductDetalis/>} />
        <Route  path='/camera' element={<Camera/>} />
        <Route  path='/cart' element={<Cart/>} />
        <Route  path='/about' element={<About/>} />
        <Route  path='/phone' element={<Phone/>} />
        <Route  path='/laptop' element={<Laptop/>} />
        <Route  path='/contact' element={<Contact/>} />
        <Route  path='*' element={<NoPage/>} />


     </Routes>
     <Footer/>
     </BrowserRouter>
    </div>
  );
}

function NoPage() {
    return (
       <>
         <h2 className='text-center py-5 my-5'>No Page - 404 not Found.</h2>
       </>
    )
}

export default App;
