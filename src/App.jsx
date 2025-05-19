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

    const logout = () => {
    if (window.confirm("Are you sure you want to sign out?")) {
        signOut(auth).then(() => {
          localStorage.removeItem('isAuth');
          toast.success('You have successfully signed out');
          setIsAuth(false);
          navigate('/');
        }).catch((error) => {
          console.log(error.message)
      })
    }
}

  return (
    <div>
      <ToastContainer position='top-right' theme="colored" />
      <Navbar isAuth={isAuth} logout={logout} />

     
      <Routes>
        <Route path='/' element={<Home isAuth={isAuth} />} />
        <Route path='/register' element={<Register setIsAuth={setIsAuth} />} />
        <Route path='/login' element={<Login setIsAuth={setIsAuth} />} />
        <Route path='/reset' element={<Reset />} />
        <Route path='/createpost' element={<Createform isAuth={isAuth}/>} />
         <Route path='/edit-post/:id' element={<EditPost isAuth={isAuth} />} />
       </Routes>    
    </div>
  )
}

export default App
