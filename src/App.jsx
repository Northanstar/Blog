import React from 'react'
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Register from './Pages/Register';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './Pages/Login';
import Reset from './Pages/Reset';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/reset' element={<Reset />} />
       </Routes>    
    </div>
  )
}

export default App
