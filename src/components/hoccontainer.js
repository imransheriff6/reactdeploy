import React, { Component } from 'react'
const UpdatedCom = (Original) =>{
    class Hoccontainer extends Component{
        constructor(props){
            super(props)
            this.state={
                count:0
            }
            this.counterChange = this.counterChange.bind(this)
        }
        counterChange() {
            this.setState(prev=>{
                return{count:prev.count + 1}
            })
        }
        render(){
            return <Original count={this.state.count} counter={this.counterChange}/>
        }
    }
    return Hoccontainer
}
export default UpdatedCom
