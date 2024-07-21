import React from 'react'
import './App.css'
import { Header } from './components/header/Header'
import { Section } from './components/section/Section'
import { Navbar } from './components/navbar/Navbar'

function App() {

  return (
    <div className='App'>
    <Header />
    <Section />
    <Navbar />
    </div>
  )
}

export default App