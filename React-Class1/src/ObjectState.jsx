import { useState } from "react";

// This is Object Example 

function LudoGame(){

    let [moves,setMoves]=useState({ blue:0,yellow:0,green:0,red:0});

    let bluemove=()=>{
        setMoves({...moves,blue:moves.blue+1});
    }

    let yellowmove=()=>{
        setMoves({...moves,yellow:moves.yellow+1});
    }

    let greenmove=()=>{
        setMoves({...moves,green:moves.green+1});
    }

    let redmove=()=>{
        setMoves({...moves,red:moves.red+1});
    }

   

 return(
 <>
 <div>
      <p>Blue Moves:{moves.blue}</p>
      <button style={{background:"blue"}} onClick={bluemove}>+1</button>

      <p>Yellow Moves:{moves.yellow}</p>
      <button style={{background:"yellow"}} onClick={yellowmove} >+1</button>

      <p>Green Moves:{moves.green}</p>
      <button style={{background:"green"}} onClick={greenmove}>+1</button>

      <p>Red Moves:{moves.red}</p>
      <button style={{background:"red"}} onClick={redmove}>+1</button>
      </div>
 </>
 )   
};

export default LudoGame;

// ---------------------------------------------------------------
 //  This is Example for Array of Objects

import { useState } from "react";

function App() {

    let [moves, setMoves] = useState([
        { blue: 0, yellow: 0, green: 0, red: 0 }
    ]);

    let addRed = () => {
        setMoves((prev) => {
            return [
                {
                    ...prev[0],
                    red: prev[0].red + 1
                }
            ];
        });
    };

    let addBlue = () => {
        setMoves((prev) => {
            return [
                {
                    ...prev[0],
                    blue: prev[0].blue + 1
                }
            ];
        });
    };

    return (
        <>
            <h2>Colour Counts</h2>

            <p>Blue: {moves[0].blue}</p>
            <p>Yellow: {moves[0].yellow}</p>
            <p>Green: {moves[0].green}</p>
            <p>Red: {moves[0].red}</p>

            <button onClick={addBlue}>Add Blue</button>
            <button onClick={addRed}>Add Red</button>
        </>
    );
}

export default App;
