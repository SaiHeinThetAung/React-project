import React from 'react'
import { UseCon } from '../context/StateContext'
import {MdOutlineStarRate}from 'react-icons/md'
import { Link } from 'react-router-dom';
const Card = ({product}) => {
    const {dispatch}=UseCon()

  return (
    <div className='w-65  p-4 shadow-lg rounded transition-transform hover:scale-105 '>
      <img src={product.image} alt="" className='h-[185px] mx-auto w-[150px]'/>
      <h2 className='text-head text-md font-semibold'>{product.title.substring(0,20)}</h2>
      <div className='flex gap-1 my-2'>
      <MdOutlineStarRate className='text-lg text-icon'/>
      <small>{product.rating.rate}</small>
      </div>
      <p className='text-secondary'>$&nbsp;{product.price}</p>
      <div className=' flex gap-10 my-2'>
      <button onClick={()=>dispatch({type:'ADD_CART',payload:product})} className='text-sm px-[7px] py-[4px]  bg-button rounded shadow-md p-2 text-primary transition-transform hover:scale-90'>Add to Cart</button>
      <Link to={ `/detail/${product.id}`}>
      <button className='px-[7px] text-sm py-[4px] bg-head rounded shadow-md p-1 text-primary transition-transform hover:scale-90'>Detail</button>
      </Link>
      </div>
    </div>
  )
}

export default Card
