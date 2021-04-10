import React from 'react'
import "./Homedivfirst.css";
import Addtocart from '../img/addtocart.svg';

function Homedivfirst() {
    return (
        <>
        <div className="homediv1">
        <div className="flexing1">
            <p className="bigfont">One Stop for <br /> All Groceries ! </p>
          
            <img src={Addtocart} alt="Logo" className="addtocartimg" />
        </div>
        </div>
        </>
    )

}

export default Homedivfirst
