import React, { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'


const Post = () => {
  const [data,setData]=useState([])
    const {id}=useParams()
    console.log(id)
    const getPosts=async()=>{
        try {
            const response=await axios.get( `https://jsonplaceholder.typicode.com/posts/${id}`)
            setData(response.data)
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    getPosts()
    
  return (
    <div className='each-post-container'>
        <h1 className='each-post-title'>{data&&data.title}</h1>
        <p>{data.body}</p>
        <p>{data.id}</p>
    </div>
  )
}

export default Post