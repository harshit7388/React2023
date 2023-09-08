
function Button({onSmash, children}){
    return(
        <button onClick= {onSmash}>
            {children}

        </button>
    )
}


function Events2(){
return(
    <>
        <Button onSmash= {()=>alert("playing")}>
            Play btn
        </Button>

        <Button onSmash= {()=>alert("paused")}>
            Pause btn
        </Button>
    
    </>
)
}
export default Events2;
