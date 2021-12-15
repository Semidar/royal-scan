import React from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import Basket from './components/basket/Basket';
import EnterForm from './components/forms/enterForm/EnterForm';
import RegisterForm from './components/forms/registerForm/RegisterForm';

function App() {
  const [basketOpen, setBasketOpen] = React.useState(false);
  const [basketItems, setBasketItems] = React.useState([]);
  const [enterFormOpen, setEnterFormOpen] = React.useState(false);
  const [regFormOpen, setRegFormOpen] = React.useState(false);
  
  return (
    <div className="App">
      
      {enterFormOpen && <EnterForm onEntreFormClose = {()=>setEnterFormOpen(false)}/>}
      {regFormOpen && <RegisterForm onRegFormClose = {()=>setRegFormOpen(false)}/>}
      
      {basketOpen && <Basket items = { basketItems } 
                             onCloseBasket={()=>setBasketOpen(false)}
                             setBasketItems={setBasketItems}/>}
      
      <Header onOpenBasket={()=>setBasketOpen(true)}  
              onEntreFormOpen = {()=>setEnterFormOpen(true)}
              onRegFormOpen = {()=>setRegFormOpen(true)}
              items = { basketItems }/>  
      
      <Main setBasketItems = { setBasketItems }/>
      
      <Footer/>
    </div>
  );
}

export default App;



