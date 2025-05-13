import { useState } from 'react'; 
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Register from './Pages/Register';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './Pages/Login';
import Reset from './Pages/Reset';
import { auth } from '../src/Firebaseconfig';
import { signOut } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import Createform from './Pages/Createform';

const App = () => {

  const navigate = useNavigate();

  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'));

  return (
    <div>
      <ToastContainer position='top-right' theme="colored" />
      <Navbar isAuth={isAuth}  />

      <Navbar />
      <Routes>
        <Route path='/' element={<Home isAuth={isAuth} />} />
        <Route path='/register' element={<Register setIsAuth={setIsAuth} />} />
        <Route path='/login' element={<Login setIsAuth={setIsAuth} />} />
        <Route path='/reset' element={<Reset />} />
        <Route path='/createpost' element={<Createform />} />
       </Routes>    
    </div>
  )
}

export default App
