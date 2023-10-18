import React from 'react'
import { Link } from 'react-router-dom';
import { useDeleteBlogMutation } from '../services/blogsApi';

function Card({blog}) {
    const [deleteBlog]=useDeleteBlogMutation();
  return (
    <div>
        <div className="card" style={{width:" 18rem",height:"350px"}}>
             <img className="card-img-top" src={blog.image} style={{height:"220px"}}/>
             <div className="card-body gap-2">
                <h5 className="card-title">{blog?.name}</h5>
                <p className="card-text">{blog?.description}</p>
                <div>
                  <Link to={`/blogs/${blog?.id}`}>
                <button className='btn btn-primary ms-3'>Detail</button>
                </Link>
                <button onClick={()=>deleteBlog(blog?.id)}  className='btn btn-danger ms-5'>Delete</button>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Card
