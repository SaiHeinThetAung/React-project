import React from 'react'
import 'animate.css'
import {BsFillBookmarkStarFill} from 'react-icons/bs'
import {BiBookmarkAltPlus} from 'react-icons/bi'

import { Link } from 'react-router-dom'
const Navigation = () => {
  return (
    <div className='flex justify-center p-5  shadow-md rounded-md'>
        <Link to={'/'} >
        <div className='flex gap-10'><p className='text-4xl'><BsFillBookmarkStarFill/></p> <h2 className='text-4xl font-semibold text-yellow-500 animate__animated animate__slow animate__jackInTheBox animate__infinite'>မြန်မာစကားပုံများ</h2><p className='text-4xl'><BiBookmarkAltPlus/></p></div>

        </Link>
    </div>
  )
}

export default Navigation
