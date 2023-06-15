import axios from 'axios'
import React,{useEffect, useState} from 'react'
import './Posts.css'
import { Link,useNavigate } from 'react-router-dom'


const Posts = () => {
const [posts,setPosts]=useState([])
const navigate=useNavigate()
    useEffect(()=>{
        const getPosts=async()=>{
            try {
                const response=await axios.get('https://jsonplaceholder.typicode.com/posts')
                setPosts(response.data)
                console.log(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        getPosts()
    },[])
    
  return (
    <div>
        <div>
        <button onClick={()=>navigate('/posts/new')}>Go to Add post</button>
        </div>
    <div className="each-post-containers">
        {posts&&posts.map((eachPost,index)=>{
            return(
                <div className='each-post-container' key={index} >
                    <Link to={`/posts/${eachPost.id}`}>
                    <h1 className='each-post-title'>{eachPost.title}</h1>
                   <p className='each-post-body'>{eachPost.body}</p>
                   </Link>
                </div>
            )
        })}
    </div>
    </div>
  )
}

export default Posts
