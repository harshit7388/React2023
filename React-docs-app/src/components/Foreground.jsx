import React, { useRef } from 'react'
import Card from './Card'


function Foreground() {

    const ref = useRef(null)
        const data = [
                {
                    desc:"this is what we are trying to build here ",
                    filesize:".5mb",
                    close:true,
                    tag:{isOpen: false, tagTitle: "Download Now", tagColor:"green"}
                },
                {
                    desc:"this is what we are trying to build here ",
                    filesize:".5mb",
                    close:false,
                    tag:{isOpen: true, tagTitle: "Download Now", tagColor:"green"}
                },
                {
                    desc:"this is what we are trying to build here ",
                    filesize:".5mb",
                    close:true,
                    tag:{isOpen: true, tagTitle:"here is ", tagColor:"blue"}
                },
               
        ];

  return (
    <div ref={ref} className='w-full h-full fixed z-[3] top-0 left-0 flex gap-3 flex-wrap p-5' >
       {data.map((item, index)=>(
        <Card data = {item} reference = {ref}/>
       ))}
    </div>
  )
}

export default Foreground
