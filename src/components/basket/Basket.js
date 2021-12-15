import React from 'react'
import './basket.scss'

const Basket = ({onCloseBasket, inBasket}) => {
    
    
    return (
        <div>
           <div onClick={onCloseBasket} className='basket__overlay'>
                <div onClick={ e => e.stopPropagation()} className='basket__modal'> 
                    <div className='title'>
                       <h2>Корзина:</h2>
                       <button onClick={onCloseBasket} className='close__btn'>Закрыть</button>
                    </div>
                        <div className='items'>
                        {inBasket.map((obj, index) => 
                            <div key={index} className='basket__item'>
                                <img src={obj.img} alt='img'></img>
                                <div className='item__template'>
                                    <div className='item__info'>
                                        <div className='name'>{obj.name}</div>
                                        <div className='price'>
                                            <h3>{obj.price} грн.</h3>
                                        </div>
                                    </div>
                                    <button className='remove__btn'>х</button>
                                </div>
                            </div>
                        )}
                        </div>
                        <div>Empty</div>
                    <div className='basket__panel'>
                        <div className='total__price'>
                            <div className='price__name'>
                               Сумма заказа:
                            </div>
                            <div className='price'>
                               1239 грн.
                            </div>
                        </div>
                        <button className='confirm__btn'>
                            Подтвердить заказ
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Basket;
