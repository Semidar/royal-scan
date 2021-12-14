import React from 'react';
import './shop.scss';
import Card from './card/Card'

const Shop = () => {

    const [items, setItems] = React.useState([]);
    // const [cardItems, setCardItems] = React.useState([]);

    React.useEffect(() => {
            fetch('https://61b78a6a64e4a10017d18b94.mockapi.io/products').then(res => {
            return res.json();
            }).then(json => {
            setItems(json);
        });
    },[]);
    
    return (
        <>
        <div className='shop'>
            <div className='shop__wrap'>
                <div className='filters'>Фильтры:</div>
                <div className='gallery'>
                    <div className='title'>Наши товары:</div>
                    <div className='product__template'>
                        {items.map((obj) => (
                            <Card 
                                name={obj.itemName} 
                                price={obj.price} 
                                img={obj.imageUrl}
                            />))}  
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Shop;
