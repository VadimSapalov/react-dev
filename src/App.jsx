import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [cartPriceCount, setcartPriceCount] = useState(0);
  const addToCartCallback = (price) => {
    setCartCount((cartCount) => cartCount + 1);
    setcartPriceCount((cartPriceCount) => cartPriceCount + (price));
  }
  return (
    <div className='app-wraper'>
      <Header itemCount = {cartCount} price = {cartPriceCount}/>
      <Main onAddToCart = {addToCartCallback}/>
      <Footer />
    </div>
  );
}

export default App
