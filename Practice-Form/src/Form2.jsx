import { useState } from "react";

function Details(){
   let[details,setDetails]=useState({
   username:"",
   password:""
   })

    let changeEvent=(event)=>{
        setDetails((currdata)=>{
            return{...currdata,[event.target.name]:event.target.value};
        })
    }

    let preventDefault=(event)=>{
         event.preventDefault();
         console.log("Form was Submitted");
         setDetails({
            username:"",
            password:""
         });
    }

   return(
    <>
      <form onSubmit={preventDefault}>
        <label htmlFor="username">Username:</label>
        <input type="text" placeholder="enter username" value={details.username} onChange={changeEvent} id="username" name="username"/>
        <br /><br />
         <label htmlFor="password">Password:</label>
        <input type="password" placeholder="enter Password" value={details.password} onChange={changeEvent} id="password" name="password"/>
          &nbsp; &nbsp;
        <button>Submit</button>
      </form>
    </>
   )
}

export default Details;