// import React from 'react'

// function Rendering() {
//   return (
//     <div>
//         <h1> Shopping list</h1>
//         <ul>

//         <Item name="milk" quantity = "1 lit" isbuy={true} />
//         <Item name="rice" quantity = "1 kg" isbuy={false}   />
//         <Item name="dal" quantity = "5 kg" isbuy={true}  />
//         </ul>
        
//     </div>
//   )
// }

// export default Rendering

// function Item({name, quantity, isbuy}){
    
//     if(isbuy){
//         return <li>{name} {quantity}✅ </li>
//     }
//     else{
//         return <li>{name} {quantity} </li>
//     }
// }


import React from 'react'

const people = [
  'Creola Katherine Johnson: mathematician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist'
];

export default function Rendering() {
  const listItems = people.map(x => <li>{x}</li>);
  return <ul>{listItems}</ul>;
}
