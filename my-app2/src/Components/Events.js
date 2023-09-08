

// function Alertbtn({msg, children}){
// return(
//     <button onClick={()=>alert(msg)} >
//         {children}
//     </button>
// )
// }



// function Events(){
//     return(
//         <>
//         <Alertbtn msg = "playing">
//             Play
//         </Alertbtn>
        
//         <Alertbtn msg = "pausing">
//             Pause
//         </Alertbtn>
        
//         </>
//     )
// }
// export default Events;











function Alertbtn({msg, children}){
return(
    <button onClick={()=>alert(msg)} >
        {children}
    </button>
)
}



function Events(){
    return(
        <>
        <Alertbtn msg = "playing">
            Play
        </Alertbtn>
        
        <Alertbtn msg = "pausing">
            Pause
        </Alertbtn>
        
        </>
    )
}
export default Events;









