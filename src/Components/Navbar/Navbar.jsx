import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'

import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../Assets/dropdown_icon.png'

const Navbar = () => {

   const [menu,setMenu] = useState("shop");
   const {getTotalCartItems}= useContext(ShopContext);
   const menuRef = useRef();

   const dropdown_toggle = (e) =>{
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
   }

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo}  height={80} width={300} alt="" />
        <p></p>
      </div>
      <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
      <ul ref={menuRef} className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link style={{ textDecoration:'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Attar")}}><Link style={{ textDecoration:'none'}}to='/men'>Attar</Link>{menu==="Attar"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Perfume")}}><Link style={{ textDecoration:'none'}}to="/women">Perfume</Link>{menu==="Perfume"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Incense")}}><Link style={{ textDecoration:'none'}}to='/kid'>Incense</Link>{menu==="Incense"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem('auth-token')
        ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
        :<Link to='/login'><button>Login</button></Link>}
        <Link to = '/cart'><img src={cart_icon} alt="" /></Link> 
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
