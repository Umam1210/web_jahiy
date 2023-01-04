import React from 'react'
import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from '../src/pages/Login'
import Register from '../src/pages/Register'
import Index from './pages/Index'
import Home from './pages/Home'
import Shop from './pages/Shop'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/home' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/transaction' element={''} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
