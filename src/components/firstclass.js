import React, { Component } from 'react'
import Subcom from './subclass'
import ReactDOM from 'react-dom'
class FirstClass extends Component{
    constructor(props){
        super(props)
        this.state={
            show:false
        }
        this.changeDiv = this.changeDiv.bind(this)
    }
    componentDidMount(){
        console.log("parent mount")
    }
    changeDiv(){
        var divbtn = document.getElementById("div_btn");
        ReactDOM.findDOMNode(divbtn).style.color='blue';
        this.props.logEvent();
        this.setState({
            show:!this.state.show
        })
    }
    render(){
        return(
            <div>
                <button id='div_btn' onClick={this.changeDiv}>show</button>
                {
                    this.state.show?<Subcom change={this.changeDiv}>this is a pop up</Subcom>:null
                }
            </div>
        )
    }
}
export default FirstClass