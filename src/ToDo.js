import React, { useEffect, useState } from 'react';

function ToDo(props){

    return(
        <h1><input type="checkbox" id={props.id} checked={props.check}/>{props.user} {props.id} {props.title}</h1>
    )
}

export default ToDo;