import React from 'react'

function ViewProducts() {
    const viewCont = {
        width: '90%',
        height:'auto',
        padding:'10px 10px',
        border:'1px solid red',
        margin:'0px auto'
    }
    const card = {
        width:'280px',
        height:'270px',
        border:'1px solid black'
    }
  return (
    <div>
        <h1 style={{textAlign:'center'}}>View all Products Section</h1>
        <div style={viewCont}>
            <div style={card}>

            </div>
        </div>
    </div>
  )
}

export default ViewProducts