import React from 'react'
import './basket.scss'

const Basket = (props) => {
    return (
        <div>
           <div className='basket__overlay'>
                <div className='basket__modal'> 
                    <div className='title'>
                       <h2>Basket</h2>
                       <button onClick={props.onCloseBasket} className='close__btn'>Close</button>
                    </div>
                    <div className='items'>
                        <div className='basket__item'>
                            <div className='img'>image</div>
                            <div className='name'>name</div>
                            <div className='price'>price</div>
                            <button className='remove__btn'>remove</button>
                        </div>
                    </div>
                    <div className='basket__panel'>
                       <div className='total__price'>
                           total price
                        </div>
                        <button className='confirm__btn'>
                            confirm
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Basket;
