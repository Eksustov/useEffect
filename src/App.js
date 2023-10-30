import ToDo from "./ToDo.js";
import React, { useEffect, useState } from 'react';

function App() {
  const toDo = {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  }
  /*const rakstsJSX = todo.map((user,indekss) => {
    return (
      <>
    <ToDo key={indekss} 
          check={user.completed} 
          user={user.userId} 
          id={user.id} 
          title={user.title}/>
    </>
    )
})*/
  return (
  <>
    <ToDo {...toDo}/>
    </>
  )
}

export default App;
