import React,{useContext} from 'react';
import ContextApi from './context'
function NestComponent2(){
    var objs = useContext(ContextApi)
    return(
        // <ContextApi.Consumer>
        // {
        //     objs =>{
        //         return <h1>hai - {objs.some}</h1>
        //     }
        // }
        // </ContextApi.Consumer>
        <h1>hai - {objs.some}</h1>
    )
}
export default NestComponent2