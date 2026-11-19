import { useState } from "react";

function formcon(){
    const[formData,setFormData]=useState("");
    const[PassformData,setPassFormData]=useState("");

    let updateChanges=(event)=>{
    //  console.log(event.target.value);
    setFormData(event.target.value);
    }
     let updatePassWord=(event)=>{
    //  console.log(event.target.value);
    setPassFormData(event.target.value);
    }

    let preventDefault=(event)=>{
              event.preventDefault();
              console.log("Form submitted");
    }

    return (
    <>
          <form  onSubmit={preventDefault}>
            <label htmlFor="username">Username:</label>
            <input type="text" placeholder="username"  
            value={formData} 
            onChange={updateChanges} 
            id="username" />
            &nbsp;
            <button>Submit</button>
            <br /><br />
            <label htmlFor="password">Password:</label>
            <input type="text" placeholder="password"  
            value={PassformData} 
            onChange={updatePassWord} 
            id="password" />
            &nbsp;
            <button>Submit</button>
          </form>
    </>
    )
}

export default formcon;