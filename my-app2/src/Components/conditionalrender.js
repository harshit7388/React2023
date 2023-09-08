import React  from "react";


function Item({itemName, ispacked}){
    return(
       <li>

       {itemName}{ispacked  && '✅'}
       </li>
  
    )
}
export default function List(){
    return(

        <>
        <h1>shopping list</h1>
        <ul>
            <Item
            ispacked={true}
            itemName = "wheat"
            />
            <Item
            ispacked={false}
            itemName = "pulses"
            />
            <Item
            ispacked={true}
            itemName = "maggi"
            />
            <Item
            ispacked={false}
            itemName = "ketchup"
            />



        </ul>
        </>
    )
}