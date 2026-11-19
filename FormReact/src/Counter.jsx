import { useEffect, useState } from "react"

function counter(){
    let[countx,setCountx]=useState(0);
    let[county,setCounty]=useState(0);

    let CountChangex=()=>{
        setCountx((count)=>{
           return count+1;
        })
    }

    let CountChangey=()=>{
        setCounty((count)=>{
           return count+1;
        })
    }

  useEffect(function sideeffect() {
    console.log("this is a side-effect");
},[countx]);

    return (
        <>
         <h1>CounterX</h1>
             <p>countX={countx}</p>
             <button onClick={CountChangex}>+1</button>

              <h1>CounterY</h1>
             <p>countY={county}</p>
             <button onClick={CountChangey}>+1</button>
             
        </>
    )
}

export default counter;