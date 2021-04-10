import React from 'react'
import Card from "./Components/Card";
import vegetablesarray from "./Components/VegetablesArray";

function newCard(vegetableitem){
  return <Card 
  title={vegetableitem.title}
  description={vegetableitem.description}
  price={vegetableitem.price}
  imgsrc={vegetableitem.imgsrc}

/>
}

function Vegetables() {
    return (
        <div className="main">
          <div className="titlestrip">
          Vegetables
          </div>

          {vegetablesarray.map(newCard)}

          {/* <Card 
    title="Potato"
    description="Potatoes are low in calories — a medium-sized baked potato contains only about 110 calories."
    price="15"
    imgsrc="https://swingit.in/uploads/ecom/media-1608015936242"

/>
<Card 
    title="Tomato"
    description="The water content of tomatoes is around 95%. The other 5% consists mainly of carbohydrates and fiber."
    price="30"
    imgsrc="https://media.istockphoto.com/photos/tomato-isolated-on-white-background-picture-id466175630?k=6&m=466175630&s=612x612&w=0&h=fu_mQBjGJZIliOWwCR0Vf2myRvKWyQDsymxEIi8tZ38="

/> */}
        </div>
    )
}

export default Vegetables
