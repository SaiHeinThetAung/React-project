import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=' d-flex gap-2  justify-content-around my-3 border shadow '>

        <h2>Blog</h2>
        <Link to={'/create'}>
        <button className='mt-2 px-4 border  py-1 bg-primary text-white shadow rounded'>Create blog</button>

        </Link>

    </div>
  )
}

export default Navbar