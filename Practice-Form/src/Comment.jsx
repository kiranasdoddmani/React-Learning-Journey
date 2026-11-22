import { useState } from "react";
import CommentForm from "./CommentForm";
function Comment(){
     let[Comment,setComment]=useState([{
        username:"Windows-laptop",
        remarks:"Have a Low-Level Battery-Life",
        rating:"3"
    }]);

  let addnewcomment=(comment)=>{
    setComment((currcomment)=>{
        return[...currcomment,comment];
    })
  }

  return(
    <>
      <h3>Comments :- </h3>
     { Comment.map((comments,idx) =>(
                     <div key={idx}>
                 <span> Remarks={comments.remarks} </span>
                <br />
                <span>{comments.username}</span>
                &nbsp;
                <br />
                <span>Rating={comments.rating}</span>
              </div>
             )
             )}
        <CommentForm addnewcomment={addnewcomment}/>
     </>
  )
}

export default Comment;