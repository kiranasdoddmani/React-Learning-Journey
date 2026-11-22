import Lotterygame from "./LotteryGame";
function LotterTab({options}){
  return(
    <>
    <h1>Lottery-Game</h1>
      {
        options.map((option)=>{
            return(
               <Lotterygame num={option}/>
            );
        })
      }
    </>
  )
}

export default LotterTab;