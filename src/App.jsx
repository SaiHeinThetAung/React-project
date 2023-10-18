import React from 'react'
import './App.css'
import { useGetBlogsQuery } from './services/blogsApi'
import Card from './components/Card'
import Navbar from './components/Navbar'
import { Route,Routes } from 'react-router-dom'
import Blogs from './components/Blogs'
import Detail from './components/Detail'
import Create from './components/Create'
import Edit from './components/Edit'
const App = () => {
  return (
    
    <div className='container' >
        <Navbar/>
      <Routes>
        <Route path='/' element={<Blogs/>}/>
        <Route path='/blogs/:id' element={<Detail/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>

      </Routes>
    </div>
  )
}

export default App