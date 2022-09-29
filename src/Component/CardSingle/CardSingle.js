import React from 'react';
import './CardSingle.css'
const CardSingle = ({singleCard ,addToCart}) => {
    const {picture,time,title,age} = singleCard
    // console.log(singleCard)
    return (
        <div>
        <div className='card-container'>
        <img className='img' src={picture} alt="" />
        <h3>{title}</h3>
        <p>Age : {age} </p>
        <p>Time required : {time}</p>
        <button onClick={()=>addToCart(time)} className='card-btn'>Add To Cart</button>
        </div>
        </div>
    );
};

export default CardSingle;