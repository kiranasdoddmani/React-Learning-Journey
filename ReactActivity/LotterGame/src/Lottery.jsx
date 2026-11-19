import { useState } from "react";
import {genTicket,sum} from './helper';
import Ticket from "./Ticket";

function LotteryGame({n,winning}){
    let[ticket,setTicket]=useState(genTicket(n));

    let isWinnig=winning(ticket);

    let buyticket=()=>{
        setTicket(genTicket(n));
    }

    return(
        <>
          <h1>Lottery Game</h1>
       
       <Ticket ticket={ticket}/>    
        {/*   The Value is go from Here for Ticket Component */}

         <button onClick={buyticket}>Buy a Ticket</button>
        <p>
            <h3>
                {isWinnig && "Congragulations,You Won!"};
            </h3>
        </p>
        </>
    )
}

export default LotteryGame;