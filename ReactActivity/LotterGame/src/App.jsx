import './App.css'
import Lottery from './Lottery';

// Functions as Props (Concept)
let winCodition=(ticket)=>{
  // return sum(ticket)===15;                          // conditions
  // return ticket.every((num)=> num===ticket[0]);     // conditions
  return ticket[0]===0;
}

function App() {
 
  return (
    <>
     <Lottery n={3} winning={winCodition}/>
    </>
  )
}

export default App;


// App -> Lottery(helper.js) -> Ticket -> TicketNum