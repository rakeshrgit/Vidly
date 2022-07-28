import React, { Component } from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './common/navbar'
import Movies from './components/movies';
import Products from './components/products';
import ProductDetails from './components/productdetails';
import Notfound from './components/notfound'
import Posts from './components/posts';
import Home from './components/home';
import LoginForm from './components/loginForm'
import RegisterForm from './components/registerForm';
class App extends Component {
  state = {  } 
  render() { 
    return (
      <div className="w-100">
        <Router>
        <Navbar/>
        <Routes>
          <Route path="products/:id" element={<ProductDetails/>} />
          <Route exact path='/' element={<Home/>}/> 
          <Route exact path='/login' element={<LoginForm/>}/> 
          <Route exact path='/register' element={<RegisterForm/>}/> 
          <Route path='/products' element={<Products/>}/> 
          <Route path='/posts' element={<Posts/>}/> 
          <Route path='/dashboard' element={<Movies/>}/> 
          <Route path="*" element={<Notfound/>}/>
        </Routes>
      </Router>
      </div> 
    );
  }
}
 
export default App;