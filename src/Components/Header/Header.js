import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
   const activeStyle = {
            fontWeight: "400",
            color: "#5292EF",
          }
  return (
    // creating navlink 
    <nav className='container'>
      <div className='nav-items'>
        <NavLink to="/home" activeStyle={activeStyle} >Home</NavLink>
       <NavLink to="/service" activeStyle={activeStyle} >Services</NavLink>
       <NavLink to="/blog" activeStyle={activeStyle}>Blogs</NavLink>
       <NavLink to="/about" activeStyle={activeStyle}>About Us</NavLink>
      </div>
      <div className="border">
        
    </div>
    </nav>
  
    
  );
};

export default Header;