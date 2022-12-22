import React,{useState, useEffect} from 'react';
import axios from 'axios'
import Display from './display';

function MinAsset() {
    const [post,setPost] = useState([])
    useEffect(() => {
        console.log("res")
        axios.get('https://fakestoreapi.com/products')
        .then(res=>{
           
            setPost(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    },[])
    console.log(post)
    
  return (
    <div>
      <Display users={post}/>
    </div>
  )
}

export default MinAsset
