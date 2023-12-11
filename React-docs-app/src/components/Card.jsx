import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";


function Card({data, reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={0.2} className='relative flex-shrink-0 w-60 h-72 rounded-[60px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'>
        <FaRegFileAlt/>
        <p className='text-sm mt-5 font-semibold leading-tight'> {data.desc} </p>
        <div className='footer absolute bottom-0 w-full  left-0 '>
            <div className='flex items-center justify-between px-8 py-3 mb-3'>
                <h5>{data.filesize}</h5>

                <span className='bg-zinc-400 rounded-full flex items-center justify-center w-5 h-5'>
                    {data.close ? <IoMdClose/> :<MdOutlineFileDownload size=".7em" color='#000'/>}
                
                </span>
            </div>
           {data.tag.isOpen ? (
             <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ?  "bg-blue-700" : " bg-green-700"} flex items-center justify-center`}>
             <h3 className='text-sm font-semibold'>{data.tag.tagTitle} </h3>
         </div>
           ):null}
        </div>
    </motion.div>
  )
}

export default Card
