import React from 'react'
import { useGetProverbTitlesQuery } from './services/proverbApi'
import { Link } from 'react-router-dom'
const Title = () => {
  const{data}=useGetProverbTitlesQuery() 
  // console.log(data)
    
  return (
    <div>
      <div className='flex w-[400px] flex-wrap mx-auto border shadow-md p-3 rounded-lg justify-center gap-2 mt-[80px] '>
          <h2 className='text-2xl ms-8 m-3 '>မြန်မာစကားပုံအက္ခရာစဉ်ဇယား </h2>
          {data?.map(name=>(
            <Link to={`/proverbs/${name.TitleId}`} state={name.TitleName }>
                  <button className=' w-[50px]  px-3 py-1 shadow-lg rounded-md text-center hover:scale-[110%]  bg-yellow-500'>{name.TitleName}</button>
            </Link>
          ))}
      </div>
    </div>
  )
}

export default Title
