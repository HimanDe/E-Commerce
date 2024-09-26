import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Navbar from './Component/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import ViewProduct from './Pages/ViewProduct'
import Cart from './Pages/Cart'
import Service from './Pages/Service'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'



function App() {


  const [cartArr, setcartArr] = useState([]);
  console.log(cartArr)
  const xyz = (obj)=>{
  let cheackData = cartArr.find((ele)=>ele.id===obj.id)

if(cheackData){
  toast.info('data aleredy add in cart',{
    position:'top-center'
  })
}
else{
  
  setcartArr([...cartArr,obj])
}
  }
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home xyz={xyz}/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/view' element={<ViewProduct/>}/>
        <Route path='/cart' element={<Cart cartArr={cartArr}/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/logIn' element={<Login/>}/>
        <Route path='/logOut' element={<Service/>}/>
        <Route path='/signUp' element={<SignUp/>}/>

      </Routes>
      <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
