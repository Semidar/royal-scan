import React from 'react'
import './card.scss'

const Card = (props) => {
    console.log(props)
    return (
        <>
        <div className='product__card'>
            <div className='img'>{props.img}</div>
            <div className='name'>{props.name}</div>
            <div className='price'>{props.price}</div>
            <div className='panel'>
                <button className='basket'>Basket</button>
            </div>
        </div>
        </>
    )
}
export default Card;
