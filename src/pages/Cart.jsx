import React from 'react'
import { useState,useEffect } from 'react'
import { UseCon } from '../context/StateContext'
import {RiDeleteBin2Fill} from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
const Cart = () => {
    const{state:{cart},dispatch,value,setValue}=UseCon()

    const nav=useNavigate()
    const checkOutHandler=()=>{
      nav('/success')
      dispatch({type:'empty'})
    }
    useEffect(()=>{
        setValue(cart.reduce((a,c)=>a+c.price,0))
    },[])
  return (
   <div className='grid grid-cols-4'>
     <div className='col-span-3 w-100 gap-4 flex flex-col'>
        {cart.map(item=>(
        <div className='flex gap-3 '>
            <img src={item.image} className='h-60 shadow-lg p-3  ' alt="" />
            <div className='mt-10 gap-3 '>
            <h2 className='font-semibold text-xl'>{item.title}</h2>
            <h2>${item.price}</h2>
            {/* <h2>Qty-{item.qty}</h2> */}
            <RiDeleteBin2Fill className='text-3xl text-icon mt-3' onClick={()=>dispatch({type:'del',payload:item})}/>
            </div>
            

        </div>
        ))}    
    </div>
    <div className='col-span-1 text-center '>
          <div className='p-10 bg-secondary text-center'>
          <h2>Total price-${value.toFixed(2)}</h2>
          <button onClick={checkOutHandler} className='py-2 px-4 text-primary mt-3 rounded-md shadow-md bg-button'>Check Out</button>
          </div>
          <button onClick={()=>dispatch({type:'empty'})} className='py-2 px-4 text-primary my-3  rounded shadow-md bg-icon'>Empty Cart</button>
    </div>
   </div>
  )
}

export default Cart