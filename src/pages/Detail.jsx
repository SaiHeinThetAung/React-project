import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getData } from '../api'
import {MdOutlineStarRate} from 'react-icons/md'
import { UseCon } from '../context/StateContext'
import Loader from '../components/loading/loader'
const Detail = () => {
    const nav=useNavigate()
    const {id}=useParams()
    const[product,setProduct]=useState({})
    const [products,setProducts]=useState([])
    const getDetail=async()=>{
        setProduct(await getData(`/products/${id}`))
    }
    const getCategory=async()=>{
      const data=await getData(`/products/category/${product.category}`)
      const filterCat=data.filter(item=>item.id!=product.id)
      setProducts(filterCat)
        console.log(products);
    }

    useEffect(()=>{
      getDetail();
      getCategory();
    },[product])
    const {dispatch}=UseCon()
  return (
    <>
      {product&& products.length>0?(   <div>
     <div className=' flex justify-start  gap-4 mt-10'>
       <img src={product?.image} alt="" className='h-45 w-60 shadow-xl rounded  p-3' />
       <div className='flex flex-col gap-4'>
        <div className='w-40'>     
             <p className=' text-center text-sm px-2 py-1 bg-button rounded-full w-30 text-primary'> {product?.category}</p>
        </div>
        <div className=" my-2">
        <h1 className='text-2xl font-semibold'>{product?.title}</h1>
        <h2 className='text-md tracking-wider leading-5 mt-2'>{product?.description}</h2>
        </div>
        <div className='flex gap-1 my-2'>
        <MdOutlineStarRate className='text-xl text-icon'/>
        <small className='text-lg'>{product?.rating?.rate}</small>
        </div>
        <p>${product?.price}</p>
        <div>
      <button onClick={()=>dispatch({type:'ADD_CART',payload:product})} className='text-sm ml-3 bg-button py-2 rounded shadow-md px-5 text-primary w-30'>Add to Cart</button>
        
        <button onClick={()=>nav('/success')}  className='text-sm ml-3 bg-head py-2 rounded shadow-md px-5 text-primary w-30'>Buy Now</button>

        </div>
        </div>
        
    </div>
    <div className='my-5'>
      <h2>You may also like</h2>
      <div className='flex flex-wrap gap-7 my-5'>
        {products.map(item=>(
          <div key={item.id}>
            <img src={item.image} alt="" className='h-40 w-50 ' />
           <p>${item.price}</p>
          </div>
        ))}
      </div>
    </div>
   </div>):<Loader/>}
    </>
    
  )
}

export default Detail
