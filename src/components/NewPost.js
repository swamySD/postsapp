import React, { useState,useEffect } from 'react'
import axios from 'axios'
import {nanoid} from "nanoid"

const NewPost = () => {
  const [data,setData]=useState([])
    const [title,setTitlte]=useState('')
    const [body,setBody]=useState('')
    
    useEffect(()=>{
      const getPosts=async()=>{
          try {
              const response=await axios.get('https://jsonplaceholder.typicode.com/posts')
              setData(response.data)
              console.log(response.data)
          } catch (error) {
            console.log(error)
          }
      }
      getPosts()
  },[])
      const addNewPost=(e)=>{
        e.preventDefault()
        const getPosts=async()=>{
            try {
              const newPost={
                title:title,
                body:body,
                userId:nanoid(),
                id:data.length+1
              }
              const response=await axios.post('https://jsonplaceholder.typicode.com/posts',newPost)
            setData([...data,response.data])
            console.log(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        getPosts()
    }
  return (
    <div>
        <form onSubmit={addNewPost}>
        <input type="text" value={title}  onChange={(e)=> setTitlte(e.target.value) }/>
        <input type="text" value={body} onChange={(e)=>setBody(e.target.value)}/>
        <button type="submit">Add New Post</button>
        </form>
        
          <div className='each-post-containers'>
        {data&&data.map((eachPost)=>{
          return(
          <div className='each-post-container' key={eachPost.id} >
                    <h1 className='each-post-title'>{eachPost.title}</h1>
                   <p className='each-post-body'>{eachPost.body}</p>
            </div>
          )
        })}
        
      </div>
    </div>
  )
}

export default NewPost