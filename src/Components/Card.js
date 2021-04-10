import React, {useState} from 'react'
import "./Card.css";
import AddSub from "./AddSub";


function Card(props) {

    const [cart, setCart] = useState([
        {
                key: 1,
                title: "Banana",
                description: "Very good fruit and enriched with vitamins.Very good fruit and enriched with vitamins",
                price: 15,
                imgsrc: "https://dailyvery.in/welcome/wp-content/uploads/2019/10/Banana.jpg"
        }
    ]);     
    function AddItem(newCartItem){
        setCart((prevArray)=>{
                return [...prevArray, newCartItem];
        })
    } 
    // console.log(cart);

    return (
        <div className="main">
        <div className="card">
        
            <div className="flexing">
            <div className="text">
                
                <p className="name">{props.title}</p>
                <p className="description">{props.description}</p>
                <p className="price">Price : Rs.{props.price}/kg</p>
            </div>
                
            <div className="photo">
            <div onClick={AddItem}><i className="fas fa-3x fa-plus-circle plus" onClick={AddItem}></i></div>
                <img  alt="pic" className="pic" src={props.imgsrc} />
              <AddSub />
            </div>
            </div>
            </div>
        </div>
    )
}


export default Card;

{/* <Card 
    title="Banana"
    description="Very good fruit and enriched with vitamins.Very good fruit and enriched with vitamins"
    price="15"
    imgsrc="data:image/jpeg;base64,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"

/> */}