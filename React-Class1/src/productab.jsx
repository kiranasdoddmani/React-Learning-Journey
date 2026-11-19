import Product from './product.jsx';
import './product.css'

function prouductTab(){
    let features=["Hi-Tech","Durable","Stability"];

    const list=features.map((feature)=> <li>{feature}</li>);

    return(
        <>
        
         <Product  title="laptop" price={50000} options={list}/>
      <Product title="Phone" price={45000}/>
       <Product title="Tab" price={6000}/>

        </>
    )
}

export default prouductTab;