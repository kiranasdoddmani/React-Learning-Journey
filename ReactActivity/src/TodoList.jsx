import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList(){

    let[todos,setTodo]=useState([{task:"Sample-Task" ,id:uuidv4()}]);
    let[newTodo,setNewTodo]=useState("");

    // Adding
    function addNewTodo(){
        // console.log("Added New Todo");

        setTodo([...todos,{task:newTodo,id:uuidv4()}]);
        setNewTodo("");
    }

    // Extract value from InputField
    function UpdateTodoValue(event){
        // console.log(event.target.value);
        setNewTodo(event.target.value);
    }

    // Delete
    function DeleteTodo(id){
        setTodo((currid)=>todos.filter((currid)=>
            currid.id!=id
        ))
    }

    // Update-All
    function UpdateAllTask(){
        // console.log("Updating a Todo-List");
     setTodo((prevTodos) =>
    prevTodos.map((todo) => ({
        ...todo,
        task: todo.task.toUpperCase()
            }))
        )}


        // Update-One
    function UpdateOne(id) {
    // console.log(id);

    setTodo((prevTodos) =>
        prevTodos.map((todo) => {
            if (todo.id == id) {
                return {
                    ...todo,
                    task: todo.task.toUpperCase()
                };
            } else {
                return todo;
            }
        })
    );
}

    return(
        <>
        <div>
            <input type="text" placeholder="Add Task" value={newTodo} onChange={UpdateTodoValue} />
            &nbsp; &nbsp;
            <button onClick={addNewTodo}>Add</button>
        </div>
          <h3>Todo-List</h3>
        <div>
            <ul>
                {
                    todos.map((todo)=>(
                        <li key={todo.id}> 
                        {todo.task}  &nbsp; &nbsp;
                        <button  onClick={()=>DeleteTodo(todo.id)}>Delete</button>&nbsp; &nbsp;
                        <button onClick={()=>UpdateOne(todo.id)}>Update</button>
                        </li>
                    ))
                }
            </ul>
            <button onClick={UpdateAllTask}>UperCaseAll</button>
          </div>
        </>
    )
}




// setTodo(
//         todos.map((todo) => {
//             if (todo.id == id) {
//                 return {
//                     ...todo,
//                     task: todo.task.toUpperCase()
//                 };
//             } else {
//                 return todo;
//             }
//         })
//     );