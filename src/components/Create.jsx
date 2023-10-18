import React, { useState } from 'react'
import { useAddBlogMutation } from '../services/blogsApi'
import { useNavigate } from 'react-router-dom'

const Create = () => {
    const [name,setName]=useState('')
    const [description,setDescription]=useState('')
    const [image,setImage]=useState('')
    const[addBlog]=useAddBlogMutation()
    const navigate=useNavigate()
    const submitHandler=(e)=>{
        e.preventDefault()
        const newBlog={id:Date.now(),name,description,image};
        addBlog(newBlog)
        navigate('/')

    }
  return (
    <div  className='d-flex justify-content-center'>
        <form onSubmit={submitHandler}>
            <div className="form-group ">
                    <label className='form-label'>name</label>
                    <input value={name} onChange={e=>setName(e.target.value)} type="text" name="" id="" className=' form-control' required/>
                    <label className='form-label'>description</label>
                    <input type="text" value={description} onChange={e=>setDescription(e.target.value)} name="" id="" className=' form-control'  required/>
                    <label className='form-label'>image</label>
                    <input type="text" value={image} onChange={e=>setImage(e.target.value)} name="" id="" className=' form-control'  required/>
                    <button className='px-4 bg-primary text-white my-4 border'>Create</button>
                    <button onClick={()=>navigate('/')} className='border ms-5 px-4 bg-danger text-white my-4 '>Back</button>

            </div>
        </form>



    </div>
  )
}

export default Create