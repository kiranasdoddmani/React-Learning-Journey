//  State :- State which is Used to Store data or Information inside the Components
 let count=0;
 
function InCount(){
    count=count+1;
    console.log(count);
}

function Counter(){
    return(
        <>
        <h3>Count={count}</h3>
         <button onClick={InCount}>Click Me...!</button>
        </>
    )
}

export default Counter;