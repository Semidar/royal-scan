import React from 'react'
import './card.scss'

const addBasket = () => {
    
}

const Card = (props) => {

    return (
        <>
        <div className='product__card'>
            <img src={props.img} alt='img'></img>
            <div className='name'>{props.name}</div>
            <div className='price'><h3>{props.price} грн.</h3></div>
            <button className='basket' onClick={addBasket}>Добавить в корзину</button>
            
        </div>
        </>
    )
}
export default Card;
