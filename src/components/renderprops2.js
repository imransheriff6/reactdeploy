import React from 'react'
function Renderprops2(props){
    const {count,increment} = props
    return(
        <div>
            <h1>Hai - {count}</h1>
            <button onClick={()=>increment()}>click here</button>
        </div>
    )
}
export default Renderprops2