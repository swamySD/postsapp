import axios from 'axios'
import React,{useEffect, useState} from 'react'

import './Posts.css'
import { Link, useParams } from 'react-router-dom'


const Posts = () => {

    const [posts,setPosts]=useState([])
    const {id}=useParams()
    useEffect(()=>{
        const getPosts=async()=>{
            try {
                const response=await axios.get('https://jsonplaceholder.typicode.com/posts')
                setPosts(response.data)
                console.log(response.data)
            } catch (error) {
                
            }
        }
        getPosts()
    },[])
    
  return (
    <div className="each-post-containers">
        {posts&&posts.map((eachPost,index)=>{
            return(
               <div className='each-post-container' key={index} >
                    <Link to={`{/posts/:${eachPost.userId}}`}>
                    <h1 className='each-post-title'>{eachPost.title}</h1>
                   <p className='each-post-body'>{eachPost.body}</p>
                   </Link>
                </div>
            )
        })}
    </div>
  )
}

export default Posts
