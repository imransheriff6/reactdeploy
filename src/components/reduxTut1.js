import React, { Component } from 'react';
import {connect} from 'react-redux'
import {changeCountDec} from "../redux/action"
function ReduxTutorial1(props){
    console.log(props)
    return <button onClick={props.decreasing}>click from 2</button>
}
// class ReduxTutorial1 extends Component{
//     render(){
//         console.log(this.props)
//         return(
//             <button onClick={this.props.decreasing}>click here 2</button>
//         )
//     }
// }
// const mapStateToProps = state =>{
//     return{
//         incReducer:state
//     }
// }
const mapStateToDispatch = dispatch =>{
    return{
        decreasing:()=>dispatch(changeCountDec())
    }
}
export default connect(null,mapStateToDispatch)(ReduxTutorial1)