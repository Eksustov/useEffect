import ToDo from "./ToDo.js";
import Comment from "./Comment.js";
import React, { useEffect, useState } from 'react';


function App() {
  
  const [toDo, setToDo] = useState({});
  const [loading,setLoading] = useState(true);

  async function getToDo(){
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/100"
    );
    const data = await response.json();
    setToDo(data);
    setLoading(false)
  }

  useEffect(() => {
    getToDo();
  }, []);

//  const toDo = {
//    userId: 1,
//    id: 1,
//    title: "delectus aut autem",
//    completed: false,
//  }
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
    {loading ? <p>Loading,,,,</p> : <ToDo {...toDo}/>}
    <br></br>
    <Comment/>
    </>
  )
}

export default App;
