const mObj = {
    name:'Some  one',
    age:'12';
    address:{
        address_1:'Some one from some where 1'
        address_2:'Some one from some where 2'
    }
}
const mObj2 = {
    name:'Some  one',
    age:'12';
    address:{
        address_1:'Some one from some where 1'
        address_2:'Some one from some where 2'
    }
}

console.log(mObj.address.address_1)
const {one,two} = mObj.address
console.log(one) //Some one from some where 1
console.log(two) = //Some one from some where 2

var combineObj = [...mObj,...mObj2]
console.log(combineObj)


import React,{useState,useEffect} from 'react'
import Axios from 'axios'
const parentDiv ={
    display:'grid';
    gridTempleteColumn:'200px auto'
}
function MobjView(){
    const user = props.user
    const [mObj,setmObj] = useState([{
        name:'Some  one',
        age:'12';
        address:{
            address_1:'Some one from some where 1'
            address_2:'Some one from some where 2'
        }
    },{
        name:'Some  two',
        age:'13';
        address:{
            address_1:'Some two from some where 1'
            address_2:'Some two from some where 2'
        }
    }]);
    const [ApiUser,setApiUser]=useState({
        alluser:[],
        error:''
    })
    useEffect(()=>{
        axios.get("https://domain/alluser")
            .then((res)=>{
                setApiUser({
                    alluser:res.data,
                    error:''
                })
            })
            .catch((err)=>{
                setApiUser({
                    alluser:[],
                    error:err.message
                })
            })
    },[ApiUser])
    return(
        <h1>View of mObj</h1>
        <div style={parentDiv}>
        <div className='user-profile'>
        <p> User Name </p>
        </div>
        <div className='user-detail'>
        mObj.map((obj) => {
            return (
                <p>{obj.name}</p>
                <small>{obj.age}</small>
                <p>
                {
                    obj.age > 10 ? "You age is greater than 10":"You age is less than 10"
                }
                </p>
                <div>
                <p>{obj.address.address_1}</p>
                <p>{obj.address.address_2}</p>
                </div>
            )
        })
        </div>
        </div>
    )
}


async function demo(){
    var data = await axios.get("https://domain/alluser")
    console.log(data)
}


action.js

export const fetchuser = ()=>(
    {
        type:'Get_All_User'
    }
)

fetchReducer.js

const initialState = {
    alluser:[],
    error:''
}
const fetchReducer = (state=initialState,action) =>{
    switch(action.type){
        case 'Get_All_User':
        return (
            ...state,
            alluser:state.alluser.concat({name:'sam',age:'12');
        )
        break
    }

}

store.js
import applyMiddleware from 'redux'
const store = createStore(fetchReducer,applyMiddleware(thunk))

const mapStateToProps = () =>{
    user:state.fetchReducer
}



for Routing
import {BrowserRoute as Router,switch} from 'react-router-dom'

<switch>
<Route path='/about' render={about}/>
<Route path='/about' render={contact}/>
</switch>

