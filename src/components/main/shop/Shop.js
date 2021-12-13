import React from 'react';
import './shop.scss';
import Card from './card/Card'

const Shop = () => {
    let products = [
        {name: '1'},
        {name: '2'},
        {name: '3'},
        {name: '4'},
        {name: '5'},
        {name: '6'}
    ];
    return (
        <>
        
        <div className='shop'>
            <div className='shop__wrap'>
                <div className='filters'>Filters</div>
                <div className='gallery'>
                    <div className='title'>Title</div>
                    <div className='product__template'>
                        {products.map(obj => 
                            <Card name={obj.name} 
                                  price='new'
                                  img={'image'}
                            />)
                        }
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Shop;
