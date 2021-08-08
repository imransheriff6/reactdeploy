import React from 'react';
import NestComponent2 from './nestcomp2'
import ContextApi from './context'
function NestComponent1(){
    var obj={
        some:"some"
    }
    return(
        <>
        <h1>hello</h1>
        <ContextApi.Provider value={obj}>
            <NestComponent2></NestComponent2>
        </ContextApi.Provider>
        </>
    )
}
export default NestComponent1