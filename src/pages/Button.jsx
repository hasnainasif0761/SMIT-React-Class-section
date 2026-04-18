import React from 'react'

function Button(props) {
    let bgColor = props.bg
    const btnCont = {
        width:'190px',
        background: bgColor ? bgColor : '#A21CAF'  ,
        padding:'10px 15px',
        borderRadius:'5px',
        fontSize:'18px',
        fontWeight:'600',
        color:'white'
    }
  return (
    <>
    <button style={btnCont}>{props.title}</button>
    </>
  )
}

export default Button