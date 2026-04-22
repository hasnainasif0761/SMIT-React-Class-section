import React, { useState } from 'react'

// React Icon Library Import Link


function Button({bg,hoverBg,title,Icon,className,iconClass}) {
    const [isHover,setIsHover] = useState(false);
    let bgColor = bg
    const btnCont = {
      height:'50px',
        background: isHover 
                    ?(hoverBg || '#7E22CE')
                    :(bg || '#A21CAF'),  
        borderRadius:'5px',
        cursor:'pointer',
        transition:'0.3s'
    }
  return (
    <>
    <button 
    style={btnCont}
    onMouseEnter={()=>setIsHover(true)}
    onMouseLeave={()=>setIsHover(false)}
    className={`flex items-center justify-center rounded-md font-semibold text-[14px] border border-gray-200 shadow-sm group ${className}`} 
    >
        {title && <span className='px-2'>{title}</span>} {Icon && <Icon className={`inline-block  transition-all duration-300 ${iconClass}`} />}
    </button>
    </>
  )
}

export default Button