// import { useState } from "react";

// function Details(){
//     let[name,setName]=useState("");

//     let changeEvent=(event)=>{
//          setName(event.target.value);
//     }

//     let preventDefault=(event)=>{
//          event.preventDefault();
//          console.log("Form was Submitted");
//          setName(" ");
//     }

//    return(
//     <>
//       <form onSubmit={preventDefault}>
//         <label htmlFor="username"></label>
//         <input type="text" placeholder="enter username" value={name} onChange={changeEvent} id="username"/>
//           &nbsp; &nbsp;
//         <button>click me</button>
//       </form>
//     </>
//    )
// }

// export default Details;