import React from 'react'
import "./Navbar.css";
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <>
        
        <div className="navbar">
        <div className="text">
        <h1 class="right">Foods</h1>
        <div className="leftitems">
        <ul className="leftitemsul">
        
        <Link to="/">
        <li>
       <h3 className="navitem">Home</h3>
        </li>
        </Link>
        
        
        <Link to="/fruits">
        <li>
        
        <h3 className="navitem">Fruits</h3>
        </li>
        </Link>
        
        
        <Link to="/vegetables">
        <li>
        
        <h3 className="navitem">Vegetables</h3>
        </li>
        </Link>
        
        
        <Link to="/mycart">
        <li>
        
        <h3 className="navitem">MyCart</h3>
        </li>
        </Link>
        
        
        
        </ul>
        </div>
            </div>
        </div>
        </>
    )
}

export default Navbar
