
function Product({title,price,features, features2}){
    let list = features.map(
        (feature) => (<li>{feature}</li>)
    );
    return(
        <>
            <h3>{title}</h3>
            <h5>Price: {price}</h5>
            <ul>{list}</ul>
            <p>{features2?.a}</p>
        </>
    )
}

export default Product
