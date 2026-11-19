import { useState } from "react";

function formcon(){
    const[formData,setFormData]=useState({
        username:"",
        password:""
    });

    // let updateChanges=(event)=>{
    // //  console.log(event.target.value);
    // setFormData(event.target.value);
    // }
    //  let updatePassWord=(event)=>{
    // //  console.log(event.target.value);
    // setPassFormData(event.target.value);
    // }


    let updateChanges=(event)=>{
        // let fieldname=event.target.name;   // name="username"
        //    let newvalue=event.target.value;

            setFormData((currdata)=>{
              return{...currdata,[event.target.name]:event.target.value};            
           })
    }

    let preventDefault=(event)=>{
              event.preventDefault();
              console.log("Form submitted");
              setFormData({
                username:"",
                 password:""
              });  // -> set empty-field on placeHolders for username and password
    }

    return (
    <>
          <form  onSubmit={preventDefault}>
            <label htmlFor="username">Username:</label>
            <input type="text" placeholder="username"  
            value={formData.username} 
            onChange={updateChanges} 
            id="username" />
            name="username"
            &nbsp;
            <button>Submit</button>
            <br /><br />
            <label htmlFor="password">Password:</label>
            <input type="text" placeholder="password"  
            value={formData.password} 
            onChange={updateChanges} 
            id="password" />
            name="password"
            &nbsp;
            <button>Submit</button>
          </form>
    </>
    )
}

export default formcon;