import React from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import Basket from './components/basket/Basket';
// import Forms from './components/forms/Forms';

function App() {
  const [basketOpen, setBasketOpen] = React.useState(false);

  return (
    <div className="App">
      {/* <Forms/> */}
      {basketOpen && <Basket onCloseBasket={()=>setBasketOpen(false)}/>}
      <Header onOpenBasket={()=>setBasketOpen(true)}/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;



