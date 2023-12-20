import React from 'react'

function Button({msg, children , onbtnclick}) {

    function handleclick(){
        // console.log(msg)
        onbtnclick();
    }
  return (
    <button onClick={handleclick}> {children} </button>
  )
}

export default Button
