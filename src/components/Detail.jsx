import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useGetDetailBlogQuery } from '../services/blogsApi'

const Detail = () => {
    const{id}=useParams()
    const{data}=useGetDetailBlogQuery(id)
    const nav=useNavigate()
    console.log(data);
  return (
    <div className='d-flex justify-content-center gap-2 '>
       <img src={data?.image} alt="" />
       <div className='flex flex-col'>
        <h2>{data?.name}</h2>
        <p>{data?.description}</p>
        <Link to={'/'}>
        <button  className='px-4 bg-danger mt-4 text-white'>Back</button>
        </Link>
        <button onClick={()=>nav(`/edit/${data?.id}`)}  className='px-4 bg-success mt-4 text-white'>Edit</button>

       </div>
    </div>
  )
}

export default Detail