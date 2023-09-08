// this is props drilling example -> the value of pen is passed from first componen to third component via second component

// import React, {useState} from "react";

// const Firstcomp = ()=>{
//     const [penName, SetPenName] = useState("blue pen")
//         return(
//                 <>
//                 <h1>this is first component </h1>
//                 <div>
//                 <Secondcomp penName={penName} />

//                 </div>
//                 </>
//         )   
// }


// const Secondcomp = ({penName})=>{
//     return(
//         <>
//         <Thirdcomp  penName={penName}/>
//         </>
//     )
// }


// const Thirdcomp = ({penName})=>{
//     return(
//         <h4>this is my pen : {penName}</h4>
//     )
// }

// export default Firstcomp







import React, {useContext, useState} from "react";

const MyContext = React.createContext();

const Firstcomp = ()=>{
    const [penName, SetPenName] = useState("blue pen")
        return(
                <>
                <h4>this is first component </h4>

                <MyContext.Provider value={{penName}}>
                    <Secondcomp/>
                </MyContext.Provider>

                </>
        )   
}


const Secondcomp = ()=>{
    return(
        <>
        <h4>this is 2nd component</h4>

        <Thirdcomp/>
        </>
    )
}


const Thirdcomp = ()=>{

   const {penName} = useContext(MyContext)
    return(
        <h4>this is my pen : {penName}</h4>
    )
}

export default Firstcomp