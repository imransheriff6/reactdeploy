import React, { Component } from 'react'
class Renderprops1 extends Component{
    render(){
        const {count,increment} = this.props
        return(
            <div>
                <h1>hello - {count}</h1>
                <button onClick={increment}>click here</button>
            </div>
        )
    }
}
export default Renderprops1