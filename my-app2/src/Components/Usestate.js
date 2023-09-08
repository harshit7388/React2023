// import React, {useState} from "react";
// function Usestate(){
//     const [state, setState] = useState(1)
//     return(
//         <>
//         <div>{state}</div>
//         <button onClick={()=>setState(state+1)}>More</button>
//         <button onClick={()=>setState(state-1)}>Less</button>

//         </>
//     )
// }

// export default Usestate





// import React, {useState} from 'react'

// function Usestate(){
//     const [first, setfirst] = useState(0)

//     return(
//         <>
//         {first}
//         <button onClick={()=>setfirst(first+1)} >badh gya</button>
        
//         <button onClick={()=>setfirst(first-1)} >kam ho gya</button>
//         </>
//     )
// }
// export default Usestate





//inside setFirst() we ised prevalue to save last value 
import React, {useState} from 'react'

function Usestate(){
    const [first, setfirst] = useState(0)

    return(
        <>
       <div>{first}</div>
        
        <button onClick={()=>setfirst(prevvalue=>prevvalue+1)} >badh gya</button>
        


        <button onClick={()=>setfirst(prevvalue=>prevvalue-1)} >kam ho gya</button>
        </>
    )
}
export default Usestate




