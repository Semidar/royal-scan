import React from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import Basket from './components/basket/Basket';
// import Forms from './components/forms/Forms';

function App() {
  const [basketOpen, setBasketOpen] = React.useState(false);
  const [basketItems, setBasketItems] = React.useState([]);
  
  return (
    <div className="App">
      {/* <Forms/> */}
      {basketOpen && <Basket items = { basketItems } onCloseBasket={()=>setBasketOpen(false)}/>}
      <Header onOpenBasket={()=>setBasketOpen(true)}/>
      <Main setBasketItems = { setBasketItems }/>
      <Footer/>
    </div>
  );
}

export default App;



