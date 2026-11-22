import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


function todolist(){
    // let[todo,setTodo]=useState(["Sample-task"]);

      let[todo,setTodo]=useState([{task:"Sample-task",id:uuidv4(),isDone:false}]);
    let[newtodo,setNewtodo]=useState("");


    function addnewtodo(event){
        event.preventDefault();
        setTodo([...todo, {task:newtodo,id:uuidv4(),isDone:false}]);
    }

    function deletetodo(id){
        setTodo( (currid)=>todo.filter((currid)=>(
            currid!==id
        )))
    }

    // function updateOne(id){
    //    setTodo( (previd)=>previd.map((currid)=>{
    //        if(currid.id===id){
    //          return{
    //             ...currid,
    //             task: currid.task.toUpperCase()
    //          };
    //        }else{
    //         return currid;
    //        }
    //     }))
    // }

    function MarkOne(id){
       setTodo( (previd)=>previd.map((currid)=>{
           if(currid.id===id){
             return{
                ...currid,
                isDone:true
             };
           }else{
            return currid;
           }
        }))
    }

    function MarkAll(){
           setTodo( (previd)=>
            previd.map((currid)=>{
             return{
                ...currid,
                isDone:true
             };
        }))
    }

    function updatevalue(event){
        setNewtodo(event.target.value);
    }

    return<>

        <input type="text" placeholder="Add a task" value={newtodo} onChange={updatevalue}  />
        &nbsp; &nbsp;
        <button onClick={addnewtodo}>Add</button>
        <hr />
        <h3>Add a Task</h3>
          {
            
            todo.map((todos)=>  (
                <li key={todos.id}>
                    <span style={todos.isDone ? {textDecorationLine:"line-through"}:{}}>{todos.task}</span>
                &nbsp;&nbsp;
                  <button onClick={ ()=>(deletetodo(todos.id))}>Delete</button>
                  &nbsp;&nbsp;
                  <button onClick={()=>MarkOne(todos.id)}>Mark</button>
                </li>
                ))
            }
            <button onClick={MarkAll}>Mark-All</button>
    </>
}

export default todolist;