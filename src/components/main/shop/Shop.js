import React from 'react';
import axios from 'axios';
import './shop.scss';
import Card from './card/Card'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch, faWindowClose } from "@fortawesome/free-solid-svg-icons"
import react from 'react';

const Shop = ({setBasketItems}) => {

    const [items, setItems] = React.useState([]);
    const [searchValue, setSearchValue] = react.useState('');
    React.useEffect(() => {

        axios.get('https://61b78a6a64e4a10017d18b94.mockapi.io/products').then(res => setItems(res.data))
        axios.get('https://61b78a6a64e4a10017d18b94.mockapi.io/basket').then(res => setBasketItems(res.data))
    },
    [setBasketItems]);

    const onAddToBasket = (product) => {
        axios.post('https://61b78a6a64e4a10017d18b94.mockapi.io/basket', product);
        setBasketItems(prev => [...prev, product]);
    }

    const onChangeInp = (e) => {
        setSearchValue(e.target.value)
    } 
    
    return (
        <>
        <div className='shop'>
            <div className='shop__wrap'>
                <div className='filters'>Фильтры:</div>
                <div className='gallery'>
                    <div className='gallery__menu'>
                        <div className='title'>{ searchValue ? `Поиск по запросу "${searchValue}"` : 'Наши товары:'}</div>
                        <div className='search__bar'>
                            <div className='search__btn'>
                                <FontAwesomeIcon icon={faSearch}/>
                            </div>

                            <input onChange={onChangeInp} value={searchValue} className='gallery__inp' type='text'/>

                            {searchValue && <div onClick={()=>setSearchValue('')} className='cancel__btn'>
                                <FontAwesomeIcon icon={faWindowClose}/>
                            </div>}
                        </div>
                    </div>
                    <div className='product__template'>
                        {items
                            .filter(item => item.itemName.toLowerCase().includes(searchValue))
                            .map((obj) => (
                            <Card
                                key={obj.id}
                                // id={obj.id} 
                                name={obj.itemName} 
                                price={obj.price} 
                                img={obj.imageUrl}
                                addProduct={onAddToBasket}
                            />))}  
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Shop;
