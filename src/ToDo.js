import React, { useEffect, useState } from 'react';

function ToDo(props){
    const [check, setCheck] = useState(props.completed)

    const handleChange = (event) =>{
    setCheck(event.target.change)
    }
    return(
        <h1>
            <p>UserID: {props.userId}</p>
            <p>ID: {props.id} </p>
            <p>Title: {props.title} </p>
            <input type="checkbox" 
            checked={check}
            onChange={handleChange}/></h1>
    )
}

export default ToDo;