import React, { Component } from 'react'
import { connect } from 'react-redux'
import {changeCount,changeCountDec} from "../redux/action"
class ReduxTutorial extends Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props.incReducer)
        return(
            <>
            <h1>count- {this.props.incReducer.count}</h1>
            <button onClick={this.props.increaseing}>Increase</button>
            <button onClick={this.props.decreasing}>Decrease</button>
            </>
        )
    }
}
const mapStateToProps = state =>{
    return{
        incReducer:state
    }
}
const mapStateToDispatch = dispatch =>{
    return{
        increaseing:()=>dispatch(changeCount()),
        decreasing:()=>dispatch(changeCountDec())
    }
}
export default connect(mapStateToProps,mapStateToDispatch)(ReduxTutorial)