import React from 'react'
import { useLocation } from 'react-router-dom'
import {BsFillJournalBookmarkFill} from 'react-icons/bs'

const EachDetail = () => {
    const {state}=useLocation()
    console.log(state)
  return (
    <div>
      <div className='flex flex-col mt-10 gap-4'>
       <div className='flex gap-3'>
          <BsFillJournalBookmarkFill className='text-3xl text-yellow-400'/>
          <h2 className='text-2xl text-yellow-400 font-bold'>{state.ProverbName}</h2>
       </div>
        <div className='mx-auto'>
            <h3 className='mb-4 text-center font-semibold text-lg'>အဓိပ္ပယ်ဖွင့်ဆိုချက်</h3>
            <p>{state.ProverbDesp}</p>
        </div>
      </div>
    </div>
  )
}

export default EachDetail