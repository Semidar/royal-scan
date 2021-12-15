import React from 'react';
import axios from 'axios';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Basket from './components/basket/Basket';
import EnterForm from './components/forms/enterForm/EnterForm';
import RegisterForm from './components/forms/registerForm/RegisterForm';
import Card from './components/card/Card'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch, faWindowClose } from "@fortawesome/free-solid-svg-icons"
import './app.scss'

function App() {

  const [products, setProducts] = React.useState([]);

  const [logFormOpen, setlogFormOpen] = React.useState(false)
  const [regFormOpen, setregFormOpen] = React.useState(false)

  const [basketOpen, setBasketOpen] = React.useState(false)
  const [basketItems, setBasketItems] = React.useState([]);

  const [searchValue, setSearchValue] = React.useState('');
  

  React.useEffect(() => {

    axios.get('https://61b78a6a64e4a10017d18b94.mockapi.io/products').then(res => setProducts(res.data))

  },
  []);

  const onAddToBasket = (product) => {
    // axios.post('https://61b78a6a64e4a10017d18b94.mockapi.io/basket', product);
    setBasketItems(prev => [...prev, product]);
  }

  const onChangeInp = (e) => {
    setSearchValue(e.target.value)
  }
  
  return (
    <>
      {logFormOpen && <EnterForm onLogClose={ () => setlogFormOpen(false) }/>}
      {regFormOpen && <RegisterForm onRegClose={ () => setregFormOpen(false) }/>}
      {basketOpen && <Basket onCloseBasket={ () => setBasketOpen(false) }
                             inBasket = { basketItems }/>}
      <Header onOpenBasket={ () => setBasketOpen(true) }
              onLogOpen={ () => setlogFormOpen(true) }
              onRegOpen={ () => setregFormOpen(true) }
              counter = { basketItems }/>  
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
                        {products
                            .filter(item => item.itemName.toLowerCase().includes(searchValue))
                            .map((obj) => (
                            <Card
                                key={obj.id}
                                name={obj.itemName} 
                                price={obj.price} 
                                img={obj.imageUrl}
                                addProduct={onAddToBasket}
                            />))}  
                    </div>
                </div>
            </div>
      </div>
      <Footer/>
    </>
  );
}

export default App;


