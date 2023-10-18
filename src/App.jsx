import React from 'react'
import Navbar from './components/Navbar'
import Products from './pages/Products'
import { Route,Routes } from 'react-router-dom'
import Detail from './pages/Detail'
import Cart from './pages/Cart'
import Success from './pages/Success'
import Loader from './components/loading/loader'
const App = () => {
  return (
    <div className='container font-poppin bg-primary mx-12 w-[1180px]'>
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Products/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/detail/:id' element={<Detail/>}></Route>
        <Route path='/success' element={<Success/>}></Route>
      </Routes>
    </div>
  )
}

export default App
