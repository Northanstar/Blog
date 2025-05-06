import React from 'react'
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Register from './Pages/Register';
import { Routes, Route, useNavigate } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
       </Routes>    
    </div>
  )
}

export default App
