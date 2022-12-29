import React, { useState } from 'react'
import { HiMenu,HiX } from "react-icons/hi";
import { NavLink } from 'react-router-dom';
import "./Style.css"

const NavBar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);
  return (
    <div>
        <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
         <nav className="navbar" onClick={e => e.stopPropagation()}>
           <div className="nav-container">
             <NavLink exact to="/" className="nav-logo">
               <img src="https://cdn.shopify.com/s/files/1/0169/4053/1812/files/logo_d11ec385-4484-4807-8e65-095f407bd860.png?v=1643859943" alt="logo"  />
             </NavLink>
             <ul className={click ? "nav-menu active" : "nav-menu"}>
               <li className="nav-item">
                 <NavLink
                   exact
                   to="/"
                   activeClassName="active"
                   className="nav-links"
                   onClick={click ? handleClick : null}
                 >
                   Home
                 </NavLink>
               </li>
               <li className="nav-item">
                 <NavLink
                   exact
                   to="/about"
                   activeClassName="active"
                   className="nav-links"
                   onClick={click ? handleClick : null}
                 >
                   About
                 </NavLink>
               </li>
               <li className="nav-item">
                 <NavLink
                   exact
                   to="/blog"
                   activeClassName="active"
                   className="nav-links"
                   onClick={click ? handleClick : null}
                 >
                   Blog
                 </NavLink>
               </li>
               <li className="nav-item">
                 <NavLink
                   exact
                   to="/contact"
                   activeClassName="active"
                   className="nav-links"
                  onClick={click ? handleClick : null}
                 >
                   Contact Us
                 </NavLink>
               </li>
             </ul>
             <div className="nav-icon" onClick={handleClick}>
               {!click ? <HiMenu></HiMenu> : <HiX></HiX>}
             </div>
             
           </div>
         </nav>
       </ div>
  )
}

export default NavBar
