import React from 'react'
import './Video.css'


const Video = ({title, bgColor}) => {
  let bg = 'dark'
return (
 <>
 <img src="https://placekitten.com/160/90/" style={{marginLeft:"10px", padding:"10px 20px"}} />
 <div className={bg}  style={{ backgroundColor:bgColor , fontSize:20,padding:"10px 20px"}}  >
  hello billi---meow meow 
  {title}
 </div>
  
 </>
)
}

export default Video



