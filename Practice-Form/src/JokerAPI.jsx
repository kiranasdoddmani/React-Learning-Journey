import { useState,useEffect } from "react";

function JokerApi(){
    let [joke, setJoke] = useState({});

    const url="https://v2.jokeapi.dev/joke/Any?type=single&safe-mode";

    let RandomJoke=async()=>{
         let response=await fetch(url);
          let data=await response.json();
         setJoke({
            joke: data.joke
        });
    }

    useEffect(()=>{RandomJoke();},[]);   // UseEffect is used to print joke on UI,When we Open the Web-Page ,if doesn't understand once comment 
    // this line and open web-page and again remove comment again open web-page u will see How useEffect will work

    // useEffect(()=>{RandomJoke();},[]);     why here [] empty dependecies is used?
    // :- to execute only when the component first appears on the screen (mounts)

 return(
   <>
    <h3>{joke.joke}</h3>
    <button onClick={RandomJoke}>Generate-Joke</button>
 </>
 )
}
export default JokerApi;