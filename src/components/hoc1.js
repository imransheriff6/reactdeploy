import React, { Component } from 'react'
import UpdatedCom from './hoccontainer'
class Hoc1 extends Component{
    render(){
        const {count,counter} = this.props
        return(
            <>
            <h1>hello -{count}</h1>
            <button onClick={counter}>click here</button>
            </>
        )
    }
}
export default UpdatedCom(Hoc1)