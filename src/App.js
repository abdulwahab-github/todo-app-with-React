import React from 'react'
import { useState } from 'react'
import './styling/todo.css'

// export default function App() {

//   const [list, setList] = useState([])
//   const [input, setInput] = useState("")

//   const addTodo = (todo) => {
//     const newTodo = {id: Math.random, todo: todo}

//     setList([...list,newTodo])

//     setInput("")
//   }


//   const deleteTodo = (id) => {
//     //!filter the todo with id
//     const newlist = list.filter((todo) => todo.id !== id)

//     setList(newlist)
//   }

//   return (
//     <div className='container'>
//       <h1 className='heading'>To-do List</h1>

      
//       <form className="form">
//       <div>
//       <label className="form__label" for="todo">✦ todo that i need ✦</label>
//       <input className="form__input"  type="text" value={input} onChange={(e) => setInput(e.target.value)} />
//     </div>
//   </form>


//       <button onClick={() => addTodo(input)}  className="button"><span>Submit</span></button>

//       <div>
//       <ul className="toDoList">
//         {list.map((todo) => (
//         <li key={todo.id}>
//           {todo.todo}
//           <button onClick={() => deleteTodo(todo.id)} className='delBtn'>&times;</button>
//         </li>
//         ))}
//       </ul>
//       </div>


//     </div>
    
//   )
// }



function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
    };

    // add the todo to the list
    setList([...list, newTodo]);

    // clear input box
    setInput("");
  };

  const deleteTodo = (id) => {
    // Filter out todo with the id
    const newList = list.filter((todo) => todo.id !== id);

    setList(newList);
  };

  return (
    <div className='container'>
      <h1 className='heading'>To-do List</h1>
      
      
      
      {/*this form has input field and styling  */}
       <form className="form">
       <div>
       <label className="form__label" for="todo">✦ todo that i need ✦</label>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="form__input" 
      />
      </div>
    </form>

      <button onClick={() => addTodo(input)} className="button"><span>Add Todo</span></button>
      
      <div>
       <ul className="toDoList">
        {list.map((todo) => (
          <li key={todo.id}>
            {todo.todo}
            <button onClick={() => deleteTodo(todo.id)}  className='delBtn'>&times;</button>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}


export default App;