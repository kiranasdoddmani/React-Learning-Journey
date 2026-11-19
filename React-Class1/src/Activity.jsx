import { useState } from "react";

function LikeButton(){

    let[isLiked,setisLiked]=useState(false);

    function isliked(){
        setisLiked(!isLiked);
    }

    return(
        <>
        <h1>Activity:Like the Button</h1>
           <p>{isLiked.toString()}</p> 
         <button onClick={isliked}>Click Me ..!</button>
        </>
    )
}

export default LikeButton;

{/*
     <i class="fa-regular fa-heart"></i>


<i class="fa-solid fa-heart"></i> 

*/}