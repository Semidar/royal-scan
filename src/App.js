import React from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import Basket from './components/basket/Basket';
import EnterForm from './components/forms/enterForm/EnterForm';

function App() {
  const [basketOpen, setBasketOpen] = React.useState(false);
  const [basketItems, setBasketItems] = React.useState([]);
  const [enterFormOpen, setEnterFormOpen] = React.useState(false);
  
  return (
    <div className="App">
      {enterFormOpen && <EnterForm onEntreFormClose = {()=>setEnterFormOpen(false)}/>}
      {basketOpen && <Basket items = { basketItems } onCloseBasket={()=>setBasketOpen(false)}/>}
      <Header onOpenBasket={()=>setBasketOpen(true)}  
              onEntreFormOpen = {()=>setEnterFormOpen(true)}/>
      <Main setBasketItems = { setBasketItems }/>
      <Footer/>
    </div>
  );
}

export default App;



