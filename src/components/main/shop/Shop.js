import React from 'react';
import './shop.scss';
import Card from './card/Card'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch, faWindowClose } from "@fortawesome/free-solid-svg-icons"
import react from 'react';

const Shop = ({setBasketItems}) => {

    const [items, setItems] = React.useState([]);
    const [searchValue, setSearchValue] = react.useState('');
    React.useEffect(() => {
            fetch('https://61b78a6a64e4a10017d18b94.mockapi.io/products').then(res => {
            return res.json();
            }).then(json => {
            setItems(json);
        });
    },[]);

    const onAddToCard = (product) => {
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
                        {items.map((obj) => (
                            <Card
                                key={obj.id} 
                                name={obj.itemName} 
                                price={obj.price} 
                                img={obj.imageUrl}
                                addProduct={onAddToCard}
                            />))}  
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Shop;
