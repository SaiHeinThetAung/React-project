import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const proverbApi=createApi({
    reducerPath:'mmproverbs',
    baseQuery:fetchBaseQuery({baseUrl:'https://json-server-ten-taupe.vercel.app/'}),
    tagTypes:['Proverbs'],
    endpoints:(builder)=>(
        {
            getProverbTitles:builder.query(
                {
                    query:()=>'/Tbl_MMProverbsTitle',
                    providesTags:['Proverbs']
                }
                
            ),
            getProverbs:builder.query({
                query:()=>'/Tbl_MMProverbs',
                providesTags:['Proverbs']
            })
            
        }
    )
})
export const{useGetProverbTitlesQuery,useGetProverbsQuery}=proverbApi;
