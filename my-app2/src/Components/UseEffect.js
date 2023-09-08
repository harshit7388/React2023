import React, { useState, useEffect } from 'react'

function UseEffect(){
const [count, setCount] = useState(0)
useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
    return(
        <>
        <h2>you clicked button {count} times </h2>
        <button onClick={()=>{
                setCount(count + 1)
        }} >
            click me  
        </button>
        </>
    )
}

export default UseEffect