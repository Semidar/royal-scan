import React from 'react'
import './card.scss'

const Card = ({ img, name, price, addProduct}) => {

    const addBasket = () => {
        addProduct({ img, name, price })
    }

    return (
        <>
        <div className='product__card'>
            <img src={img} alt='img'></img>
            <div className='name'>{name}</div>
            <div className='price'><h3>{price} грн.</h3></div>
            <button onClick={addBasket} className='basket' >Добавить в корзину</button>
            
        </div>
        </>
    )
}
export default Card;
