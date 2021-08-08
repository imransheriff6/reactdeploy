import { createStore } from "redux";
import incReducer from './incReducer'
const store = createStore(incReducer)
export default store