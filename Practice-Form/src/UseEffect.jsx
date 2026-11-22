import { useState,useEffect } from "react";
// UseEffect Which is used to Perform side-effects in functionl-Components
function UseEffect(){
    let[countx,setCountx]=useState(0);
    let[county,setCounty]=useState(0);

    let IncCountx=()=>{
        setCountx((currCountx)=>{
            return currCountx+1;
        })
    }
     let IncCounty=()=>{ 
         setCounty((currCounty)=>{
            return currCounty+1;
        })
    }

      useEffect(function sideeffect() {
        console.log("this is a side-effect");
        },
        [countx,county]
        );

  return(
    <>
      <div>
        Count:{countx}
        <br />
        <button onClick={IncCountx}>Click Me</button>
        <br /><br />
         Count:{county}
        <br />
        <button onClick={IncCounty}>Click Me</button>
      </div>
    </>
  )
}

export default UseEffect;