/* eslint-disable react/prop-types */

import 'bootstrap/dist/css/bootstrap.min.css';
 import { Button} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Home from './pages/home/Home'
import Order from './pages/order/Order';
import Cart from './pages/cart/Cart';
import Allproduct from './pages/allProducts/Allproduct';
import Dashborad from './pages/admin/dashboard/Dashborad';
import Nopage from './pages/nopage/Nopage';
import MyState from './context/data/myState';
import Login from './pages/registration/Login';
import Signup from './pages/registration/Signup';
import ProductInfo from './pages/productInfo/ProductInfo';
import AddProduct from './pages/admin/pages/AddProduct';
import  UpdateProduct  from './pages/admin/pages/UpdateProduct';
// import { useMyContext } from '../src/context/data/myContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  

  return (
    <MyState>
       
    <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/order" element={
        <ProtectedRoutes>
          <Order/>
        </ProtectedRoutes>
      } />
      <Route path="/Cart" element={<Cart/>} />
      <Route path="/allproducts" element={<Allproduct/>} />
      <Route path="/dashboard" element={
        
        <ProtectedRoutesForAdmin>
          
        <Dashborad/> 
        </ProtectedRoutesForAdmin>
       } />
        
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/productinfo/:id" element={<ProductInfo />} />
      <Route path="/addproduct" element={
        <ProtectedRoutesForAdmin>
          <AddProduct />
        </ProtectedRoutesForAdmin>
      } />
      <Route path="/Updateproduct" element={
        <ProtectedRoutesForAdmin>
          <UpdateProduct />
        </ProtectedRoutesForAdmin>
      } />
     
      <Route path="/*" element={<Nopage/>} />

    </Routes>
   </Router>
    <ToastContainer />
    </MyState>
    
  );
}

export default App; 


// user
export const ProtectedRoutes = ({ children }) => {
  if (localStorage.getItem('user')) {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}

export const ProtectedRoutesForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem('user'))
  console.log(admin.user.email)
  if (admin.user.email === import.meta.env.VITE_ADMIN_EMAIL) {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}