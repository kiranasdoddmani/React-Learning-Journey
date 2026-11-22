import { useState } from "react";

function CommentForm({addnewcomment}){
    let[comment,setComment]=useState({
        username:"",
        remarks:"",
        rating:""
    });

    function onchangeevent(event){
      setComment((currComment)=>{
        return{ ...currComment,[event.target.name]:event.target.value};
      })
    }

    function preventDefult(event){
      event.preventDefault();
      addnewcomment(comment);
      console.log("Form was Submitted");
      setComment({
        username:"",
        remarks:"",
        rating:""
      })
    }

  return(
    <>
      <form onSubmit={preventDefult}>
        <label htmlFor="username">Username:</label>
        <input type="text" placeholder="Enter username" value={comment.username} id="username" onChange={onchangeevent} name="username" />
        <br /> <br />
        <label htmlFor="remarks">Remarks:</label>
        <input type="text" placeholder="Enter Remarks" value={comment.remarks} id="remarks" onChange={onchangeevent} name="remarks" />
        <br /> <br />
         <label htmlFor="ratings">Ratings:</label>
        <input type="number"  value={comment.rating} id="ratings" onChange={onchangeevent} name="rating" max={5} min={1}/>
        <br /><br />
        <button >Submit</button>
      </form>
    </>
  )
}

export default CommentForm;