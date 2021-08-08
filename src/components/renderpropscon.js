import React, { Component } from 'react'
class RenderContainer extends Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
        this.counter = this.counter.bind(this)
    }
    counter(){
        this.setState(prev =>{
            return {count:prev.count + 1}
        })
    }
    render(){
        return(
            <>
            {this.props.render(this.state.count,this.counter)}
            </>
        )
    }
}
export default RenderContainer