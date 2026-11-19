import { useState } from "react";

let count=0;

function Counter(){

    let[count,setCount]=useState(0);
 //    console.log(`Count value :${count}`);

    // function IncCount(){
    // setCount(count+1);
    // console.log(`Count value is:${count}`);
    //  }

     function IncCount(){
    setCount((currval)=>{          //  Crt Way to Write a setCount in the form of CallBack
       return currval+1;
    });
    console.log(`Count value is:${count}`);
     }


    return(
        <>
         <h3>Count={count}</h3>
          <button onClick={IncCount}> Click Me ..!</button>
        </>
    )
};

export default Counter;