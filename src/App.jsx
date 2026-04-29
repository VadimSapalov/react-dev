import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import './App.css'
import SoftwareDetails from './components/SoftwareDetails';
import About from './components/About';
import ContactPage from './components/ContactPage';

function App() {
  const [cartCount, setCartCount] = useState(() => {
    const savedCount = localStorage.getItem('cartCount');
    return savedCount ? JSON.parse(savedCount) : 0;
  });

  const [cartPriceCount, setcartPriceCount] = useState(() => {
    const savedPrice = localStorage.getItem('cartPrice');
    return savedPrice ? JSON.parse(savedPrice) : 0;
  });

  const [isLoading, setIsLoading] = useState(true);
  const [promoTime, setPromoTime] = useState(60); //Таймер на 1 хв

  //Ефект для Spinner
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); //Таймер на 2 с
    return () => clearTimeout(timer);
  }, []);

  //Ефект для акційного таймера
  useEffect(() => {
    if (promoTime <= 0) return;
    const interval = setInterval(() => {
      setPromoTime(prev => prev - 1);
    }, 1000); //1 c
    return () => clearInterval(interval);
  }, [promoTime]);

  //Ефект для збереження в LocalStorage при кожній зміні кошика
  useEffect(() => {
    localStorage.setItem('cartCount', JSON.stringify(cartCount));
    localStorage.setItem('cartPrice', JSON.stringify(cartPriceCount));
  }, [cartCount, cartPriceCount]);

  const addToCartCallback = (price) => {
    setCartCount(prev => prev + 1);
    setcartPriceCount(prev => prev + price);
  }

  //Функція для форматування часу (00:00)
  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  }

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className='app-wraper'>
      {/*
      {promoTime > 0 && (
      <div className="alert alert-danger text-center m-0 rounded-0">
        Акція закінчується через: <strong>{formatTime(promoTime)}</strong>
      </div>)} 
      */}
      
      <Header itemCount={cartCount} price={cartPriceCount}/>
      <Routes>
        {/*Шлях для головної сторінки*/}
        <Route path="/" element={<Main onAddToCart={addToCartCallback}/>} />
        {/*Шлях для сторінки about*/}
        <Route path="/about" element={<About />} />
        {/*Шлях для сторінки бібліотеки пз*/}
        <Route path="/catalog" element={<h1 className="text-center mt-5">Тут буде бібліотека користувача</h1>} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path='/software/:id' element={<SoftwareDetails />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;