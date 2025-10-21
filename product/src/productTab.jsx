
import Product from './product'

function ProductTab(){
    let features = ["hi-tech", "durable","fast" ];
    let features2 = {a:"hi-tech", b:"durable", c:"fast" };
    return(
        <>
        <Product title="Laptop" price="40000" features={features}  features2={features2}/>
        <Product title = "Phone" price="10000" features={features} features2={features2}/>
        </>
    )
}

export default ProductTab
