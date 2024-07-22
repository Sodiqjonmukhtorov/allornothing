import React from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { Section } from './components/section/Section';
import { Navbar } from './components/navbar/Navbar';
import { Product } from './components/product/Product';
import { Box } from './components/box/Box';
import { Acessuars } from './components/acessuars/Acessuars';
import { Cart } from './components/cart/Cart'; 
import { Footer } from './components/footer/Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <Section />
      <Navbar />
      <Product />
      <Box />
      <Acessuars />
      <Cart /> 
      <Footer /> 
    </div>
  );
}

export default App;
