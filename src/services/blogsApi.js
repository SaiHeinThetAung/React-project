import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const blogsApi=createApi({
    reducerPath:'blogs',
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:3000'}),
    tagTypes:['Blogs'],
    endpoints:(builder)=>(
        {
            getBlogs:builder.query(
                {
                    query:()=>'/blogs',
                    providesTags:['Blogs']
                }
                
            ),
            getDetailBlog:builder.query(
                {
                    query:(id)=>`/blogs/${id}`,
                    providesTags:['Blogs']

                }
            ),
            addBlog:builder.mutation({
                query:(blog)=>({
                    url:'/blogs',
                    method:'POST',
                    body:blog
                }
            ),
                invalidatesTags:['Blogs']  
            }),
            deleteBlog:builder.mutation({
                query:(id)=>({
                    url:`/blogs/${id}`,
                    method:'DELETE',
                    body:id
                }),invalidatesTags:['Blogs']
            }),
            editBlog:builder.mutation({
                query:(blog)=>({
                    url:`/blogs/${blog.id}`,
                    method:'PUT',
                    body:blog
                }),invalidatesTags:['Blogs']
            })
        }
    )
})
export const{useGetBlogsQuery,useGetDetailBlogQuery,useAddBlogMutation,useDeleteBlogMutation,useEditBlogMutation}=blogsApi;