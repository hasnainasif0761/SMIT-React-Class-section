import React, { useState } from 'react'
import { FaArrowRight } from "react-icons/fa6";

function Button(props) {
    const [isHover,setIsHover] = useState(false);
    let bgColor = props.bg
    const btnCont = {
      width:'340px',
      height:'50px',
        background: isHover 
                    ?(props.hoverBg || '#7E22CE')
                    :(props.bg || '#A21CAF'),  
        borderRadius:'5px',
        fontSize:'16px',
        fontWeight:'600',
        color:'white',
        cursor:'pointer',
        transition:'0.3s'
    }
  return (
    <>
    <button 
    style={btnCont}
    onMouseEnter={()=>setIsHover(true)}
    onMouseLeave={()=>setIsHover(false)}
    className='md:max-w-[190px] w-[90%] group'
    >
        {props.title} {props.icon && <FaArrowRight className='inline-block group-hover:ml-2 transition-all duration-300' />}
    </button>
    </>
  )
}

export default Button