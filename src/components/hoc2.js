import React from 'react';
import UpdatedCom from './hoccontainer'
function Hoc2(props){
    return (
        <>
        <h1>Hai -{props.count}</h1>
        <button onClick={()=>props.counter()}>click here</button>
        </>
    )
}
export default UpdatedCom(Hoc2)