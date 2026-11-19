import { useState } from "react"

// import Comment from './CommentForm';
import Comment from './CommentFormValidation';

function CommentForm(){

    let [comment,setComment]=useState([{
        username:"@kirana",
        remarks:"Java-Developer",
        rating:5
    }]);

    let addNewComment=(comment)=>{
       setComment((currComment)=>[
        ...currComment,comment        // comment → Adds the new comment at the end of the array.
       ])   
    }

    return(
        <>
          <h1>All Comments</h1>
             {comment.map((comments,idx) =>(
                     <div key={idx}>
                 <span> (remarks={comments.remarks}) </span>
                <br />
                <span>{comments.username}</span>
                &nbsp;
                <br />
                <span>(rating={comments.rating})</span>
              </div>
             )
             )}
              <hr />
              <Comment addnewcomment={addNewComment}/>
        </>
    )
}

export default CommentForm;
