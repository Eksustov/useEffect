import React, { useEffect, useState } from 'react';

function Comment(){

    const [comment, setComment] = useState({});
    const [loading,setLoading] = useState(true);
  
    async function getComment(){
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments/1"
      );
      const data = await response.json();
      setComment(data);
      setLoading(false)
    }
  
    useEffect(() => {
      getComment();
    }, []);

    return(
        <>
            {loading ? <p>loading.....</p> :         <h1>
            <p>UserID: {comment.postId}</p>
            <p>ID: {comment.id} </p>
            <p>E-mail: {comment.email} </p></h1>}
        </>
    );

}

export default Comment