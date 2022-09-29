import React from 'react';
import CardSingle from '../CardSingle/CardSingle';
import Nav from '../Nav/Nav';
import './Card.css'
const Card = ({dataItems,cart,setCart,addToCart}) => {
  
    return (
        <div>
        <Nav></Nav>
        <div className='container'>
        {dataItems.map(item => (
        <CardSingle singleCard={item} key={item.age} cart={cart} setCart={setCart} addToCart={addToCart}>

        </CardSingle>
        ))}
        </div>
        </div>
    );
};

export default Card;