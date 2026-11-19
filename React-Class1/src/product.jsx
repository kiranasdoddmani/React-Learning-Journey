function product({title,price,options}){

  let isDiscount=price>30000 ? "5%" :"";

  let styles={ backgroundColor:isDiscount ? "pink":""};

    return(
        <>
        <div className='product' style={styles}>
         <h1>{title}</h1>
         <p>{price}</p>
       <p> {isDiscount}</p>
     {/*   <p>{options}</p> */}
         </div>
        </>
    )
}

export default product;