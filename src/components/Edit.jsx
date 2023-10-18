import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useEditBlogMutation, useGetDetailBlogQuery } from '../services/blogsApi'


const Edit = () => {
    const {id}=useParams()
    const {data:blog}=useGetDetailBlogQuery(id)
    const [name,setName]=useState('')
    const [description,setDescription]=useState('')
    const [image,setImage]=useState('')
    const navigate=useNavigate()
    const [editBlog]=useEditBlogMutation()
    const submitHandler=(e)=>{
            e.preventDefault()
            const changeBlog={id,name,description,image}
            editBlog(changeBlog)
            navigate(`/`)
    }
    useEffect(()=>{
        setName(blog?.name)
        setDescription(blog?.description)
        setImage(blog?.image)
    },[blog])
  return (
    <div  className='d-flex justify-content-center'>
    <form onSubmit={submitHandler}>
        <div className="form-group ">
                <label className='form-label'>name</label>
                <input defaultValue={name} onChange={e=>setName(e.target.value)} type="text" name="" id="" className=' form-control' required/>
                <label className='form-label'>description</label>
                <input type="text" defaultValue={description} onChange={e=>setDescription(e.target.value)} name="" id="" className=' form-control'  required/>
                <label className='form-label'>image</label>
                <input type="text" defaultValue={image} onChange={e=>setImage(e.target.value)} name="" id="" className=' form-control'  required/>
                <button className='px-4 bg-success text-white my-4 border'>Update</button>
                <button onClick={()=>navigate('/')} className='border ms-5 px-4 bg-danger text-white my-4 '>Back</button>

        </div>
    </form>



</div>
    )
}

export default Edit