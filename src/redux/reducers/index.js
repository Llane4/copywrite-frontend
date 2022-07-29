import { selectReducer } from "./textReducer"
import {combineReducers} from 'redux'

const reducers= combineReducers({
    
    selectText: selectReducer
})

export default reducers 