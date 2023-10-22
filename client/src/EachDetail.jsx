import React from 'react'
import {  useLocation, useNavigate } from 'react-router-dom'
import {BsFillJournalBookmarkFill} from 'react-icons/bs'

const EachDetail = () => {
    const {state}=useLocation()
    const nav=useNavigate()
    console.log(state)
  return (
    <div>
      <div className='flex flex-col mt-10 gap-4'>
       
          <div onClick={()=>nav(-1)} className='flex gap-3 cursor-pointer hover:focus:peer-focus-visible'>
              <BsFillJournalBookmarkFill className='text-3xl text-yellow-400'/>
              <h2 className='text-2xl text-yellow-400 font-bold'>{state.ProverbName}</h2>
          </div>
      
        <div className='mx-auto w-[400px] shadow-lg p-10 mb-4'>
          <img className='w-[400px] mb-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO6gl8D3OzkpqmqJW5SlWLRbP2VhSEAZXUMg&usqp=CAU" alt="" />
            <h3 className='mb-4 text-center font-semibold text-lg'>အဓိပ္ပာယ်ဖွင့်ဆိုချက်</h3>
            <p>{state.ProverbDesp}</p>
        </div>
      </div>
    </div>
  )
}

export default EachDetail
