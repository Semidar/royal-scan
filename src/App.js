import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import Basket from './components/basket/Basket';

function App() {
  return (
    <div className="App">
      <Basket/>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
