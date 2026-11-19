import { useState } from "react";

function Comment({addnewcomment}){

    let[formData,setFormData]=useState({
        username:"",
        remarks:"",
        rating:""
    });

    let UpdateChange=(event)=>{
       setFormData((currData)=>{
        return{...currData,[event.target.name]:event.target.value};
       })
    }

    let SubmitChange=(event)=>{
          event.preventDefault();

          addnewcomment(formData);            // this line will pass recently stored data to Comment functions Here They Excecute it.
          
          console.log("Form was Submitted");
          setFormData({
            username:"",
        remarks:"",
        rating:""
          })
    }

    return(
    <>
       <form onSubmit={SubmitChange}>
        <label htmlFor="username">Username:</label>
        <input type="text" placeholder="username" value={formData.username} name="username" onChange={UpdateChange} id="username"/>
        <br /><br />

        <label htmlFor="textarea">textarea:</label>
        <textarea placeholder="add few Comments" value={formData.remarks} name="remarks"  onChange={UpdateChange} id="textarea"></textarea>
        <br /><br />

        <label htmlFor="remarks">rating:</label>
        <input type="number" max={5} min={1} value={formData.rating}  name="rating"  onChange={UpdateChange} id="remarks"/>
        <br /><br />
        <button >Submit</button>
       </form>
    </>
    )
}

export default Comment;