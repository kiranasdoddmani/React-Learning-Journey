function clickButton(event){
      event.preventDefault();
    console.log("Click The Button !");
}

function Random(){
    return (
        <>
          {/* <div>
           <button onClick={clickButton}>Click Me !..</button>
          </div> */}

          <form>
          <input type="text" />
          <button onClick={clickButton}>Click Me...!</button>
          </form>
        </>
    )
};

export default Random;