import { useState } from "react";

let count=0;

let init=()=>{
    return Math.random();
}

function Counter(){

    let[count,setCount]=useState(init);
 //    console.log(`Count value :${count}`);

     function IncCount(){
    // setCount((currval)=>{          
    //    return currval+1;
    // });

    setCount(25);
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