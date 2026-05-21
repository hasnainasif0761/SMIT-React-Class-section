import React, {useState} from 'react'

function UseEffect(){
    const [count,setCount] = useState(0)


    return(
        <>
            <h1>UseEffect Here</h1>
            <h1>Count is {}</h1>
            <button onClick={()=>setCount(count+1)}>Increment</button>
        </>
    )
}
export default UseEffect