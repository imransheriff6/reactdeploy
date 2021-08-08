const initialState = {
    count:10
}
const incReducer = (state=initialState,action) => {
    switch(action.type){
        case 'Increase':
            return{
            ...state,
            count:state.count+1
        }
        case 'Decrease':return{
            ...state,
            count:state.count-1
        }
        default:return state
    }
}
export default incReducer