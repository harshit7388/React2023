import React from 'react'

const ChildComponent = (props)=>{
    return(
      <div style={{backgroundColor:'red', padding:'6px'}}>
        {props.children}
      </div>

    )
}

export default  ChildComponent