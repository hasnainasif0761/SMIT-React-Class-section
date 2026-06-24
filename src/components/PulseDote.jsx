import React from 'react'

function PulseDote({color='green',size="2"}) {
  return (
    <span className={`relative flex h-${size} w-${size}`}>
        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-${color}-400 opacity-75`}>
            <span className={`relative inline-flex rounded-full h-${size} w-${size} bg-${color}-500`}></span>  
        </span>
    </span>
  )
}

export default PulseDote