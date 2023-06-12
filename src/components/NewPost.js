import React, { useState } from 'react'
import axios from 'axios'

const NewPost = () => {
    const [title,setTitlte]=useState('')
    const [body,setBody]=useState('')
    const addNewPost=(e)=>{
        e.preventDefault()
        const getPosts=async()=>{
            try {
                const response=await fetch( 'https://jsonplaceholder.typicode.com/posts',{
                method:'POST',
                body:JSON.stringify({
                    title,
                    body,
                    userId: 1,
                  }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                  }}
                )
            console.log(response.data)
            } catch (error) {
                
            }
        }
        getPosts()
    }
  return (
    <div>
        <form onSubmit={addNewPost}>
        <input type="text" value={title}  onChange={(e)=> setTitlte(e.target.value) }/>
        <input type="text" value={body} onChange={(e)=>setBody(e.target.value)}/>
        <button>Add New Post</button>
        </form>
    </div>
  )
}

export default NewPost