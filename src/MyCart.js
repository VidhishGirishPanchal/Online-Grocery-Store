import React from 'react'
import Card from "./Components/Card";

function MyCart() {
    return (
        <div className="main">
          <div className="titlestrip">
          My Cart
          </div>
          <Card />
          <Card />
          <Card />
        </div>
    )
}

export default MyCart
