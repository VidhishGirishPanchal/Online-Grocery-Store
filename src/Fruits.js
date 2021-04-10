import React from 'react';
import "./Fruits.css";
import Card from "./Components/Card";
import fruitsarray from "./Components/FruitsArray";

function newCard(fruititem){
  return <Card 
  title={fruititem.title}
  description={fruititem.description}
  price={fruititem.price}
  imgsrc={fruititem.imgsrc}

/>
}

function Fruits() {
    return (
        <div className="main">
          <div className="titlestrip">
          Fruits
          </div>

          {fruitsarray.map(newCard)}


          {/* <Card 
    title="Banana"
    description="Very good fruit and enriched with vitamins.Very good fruit and enriched with vitamins"
    price="15"
    imgsrc="https://dailyvery.in/welcome/wp-content/uploads/2019/10/Banana.jpg"

/>
<Card 
    title="Apple"
    description="Apples are the ideal fruit to eat at any time, having a positive role in the achievement of nourish balance. "
    price="20"
    imgsrc="https://5.imimg.com/data5/HF/CW/MY-51857835/organic-apple-fruit-500x500.jpg"

/> */}
        </div>
    )
}

export default Fruits;
