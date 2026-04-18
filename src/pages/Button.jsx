import React, { useState } from 'react'

function Button(props) {
    const [isHover,setIsHover] = useState(false);
    let bgColor = props.bg
    const btnCont = {
        background: isHover 
                    ?(props.hoverBg || '#7E22CE')
                    :(props.bg || '#A21CAF'),  
        padding:'10px 15px',
        borderRadius:'5px',
        fontSize:'18px',
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
    className='md:max-w-[190px] w-[97%]'
    >
        {props.title}
    </button>
    </>
  )
}

export default Button