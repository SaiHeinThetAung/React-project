import React from 'react'
import {FaSearch, FaShopify, FaShoppingCart} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { UseCon } from '../context/StateContext'
const Navbar = () => {
  const {search,setSearch,state:{cart}}=UseCon()
  return (
    <nav className='flex items-center  justify-between my-4 px-3 py-2 rounded shadow-lg '>
      <Link to={'/'}>
      <div className='flex items-center gap-2 mx-[20px]'>
       <FaShopify className='text-4xl text-icon'/>
       <h1 className='uppercase tracking-wider font-semibold'>mm-shop</h1>
      </div>

      </Link>
      <div className='flex items-center gap-3 mx-[20px]'>
      <Link to={'/cart'}>
          <div className='flex items-center gap-3 bg-head text-primary px-2 py-1 rounded'>
            <FaShoppingCart className='text-2xl'/>
            <small>{cart.length}</small>
          </div>
      </Link>
      <div className='flex items-center gap-2'>
        <FaSearch />
        <input type="text " value={search} onChange={e=>setSearch(e.target.value)} className='outline-none px-2 py-2 rounded shadow-lg' placeholder='Search...' />
      </div>
      </div>
    </nav>
  )
}

export default Navbar
