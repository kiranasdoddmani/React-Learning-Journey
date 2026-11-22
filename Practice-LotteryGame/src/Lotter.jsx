import { useState } from "react";
import { generatenum,sum } from "./helper";
import LotterTab from "./LotteryTab";

function GenerateTicket({n}){
     let[ticket,setTicket]=useState(generatenum(n));

     let buyticket=()=>{
         setTicket(generatenum(n));
     }

    return (
        <>
          <LotterTab options={ticket} />
          
          <button onClick={buyticket}>Generate a Ticket</button>
        </>
    )
}

export default GenerateTicket;