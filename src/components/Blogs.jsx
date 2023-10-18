import React from 'react'
import { useGetBlogsQuery } from '../services/blogsApi'
import Card from './Card'
const Blogs = () => {
    const {data}=useGetBlogsQuery()

  return (
    <>
        <div >
          <div className='d-flex flex-warp gap-4 justify-content-center my-4 ' >
            {data?.map(it=>(
            <Card key={it.id} blog={it}/>
            
            ) )}
          </div>
        </div>
    </>
  )
}

export default Blogs