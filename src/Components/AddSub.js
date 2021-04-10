import React, {useState} from 'react'
import "./AddSub.css"

function AddSub() {

    const [count, setCount] = useState(0);
    function incrementCount(){
        setCount(prevCount => prevCount+1);
    }
    function decrementCount(){
        setCount(prevCount => prevCount-1);
    }

    return (
        <div className="mainin">
             <i className="fas fa-minus-square item fa-2x subtract" onClick={decrementCount}></i>
            <span className="item">{count}</span>
             <i className="fas fa-plus-square item fa-2x add" onClick={incrementCount}></i>
        </div>
    )
}

export default AddSub
