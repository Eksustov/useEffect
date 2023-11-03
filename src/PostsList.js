import React, { useEffect, useState } from 'react';
import Post from "./Post.js";

function PostsList(){
    const [postList, setPostList] = useState();
    const [loading, setLoading] = useState(true);

    async function getPostList(){
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        setPostList(data);
        setLoading(false)
      }
    
      useEffect(() => {
        getPostList();
      }, []);

      console.log(postList);

      const postListJSX = postList.map((post,index) =>{
      return <Post key={index} {...post}/>
      })
    
    return (
    <>
    {loading ? <p>Looooading...</p> : {postListJSX}}
    </>)
}

export default PostsList