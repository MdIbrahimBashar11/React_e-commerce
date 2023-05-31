import { ShoppingCart } from '@mui/icons-material';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [active , setActive] = useState('nav_manu');
   const navToggle = () => {
     active === 'nav_manu' ? 
     setActive('nav_manu nav_active') :
     setActive('nav_manu');
   }
  return ( 
    <div>
        <nav className='nav'>
            <h1><Link className='logo' to='/'>Shoper</Link></h1>
            <ul className={active}>
             <li className='nav_item'>
               <Link className='navlink' to='/'>Home</Link>
                <Link className='navlink' to='/product'>Product</Link>
                <Link className='navlink' to='/cart'><ShoppingCart/></Link>
                <Link className='navlink' to='/about'>About</Link>

                 <Link className='navlink' to='/contact'>Contact</Link>
             </li>
            </ul>
            <div onClick={navToggle} className="nav_toggler">
               <div className="line1"></div>
               <div className="line2"></div>
               <div className="line3"></div>

            </div>
        </nav>
    </div>
  )
}

export default Navbar