import React from 'react'
import { useNavigate } from 'react-router-dom'
const Success = () => {
  const nav=useNavigate()
  return (
    <div className='flex rounded-md justify-center mt-5  '>
      <div className='p-20 bg-secondary item-center '>
        <h1  className='animate__animated animate__BackInDown font-semibold text-2xl mb-3'>Thanks for purchase</h1>
        <button onClick={()=>nav('/')} className='text-primary uppercase py-2 px-4 ms-12 rounded shadow-sm  bg-icon hover:scale-105'>
            go shopping
        </button>
      </div>
    </div>
  )
}

export default Success
