// function Product(props) {
//     return (
//       <div>
//         <img src={props.img} alt="sneakers" />
//         <h4>{props.name}</h4>
//         <p>{props.desc}</p>
//         <h4>{props.price}</h4>
//       </div>
//     );
// }

// export default Product







function Product ({img, name, desc, price}){
    return(
        
        <>
        <img src={img} />
        <h4>{name}</h4>
        <p>{desc}</p>
        <h4>{price}</h4>
        </>
    )
    
}
export default Product
