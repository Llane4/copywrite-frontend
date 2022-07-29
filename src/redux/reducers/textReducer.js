import { ActionTypes } from "../constants/actionsType";



const initialState={
    text:[]
};
export const selectReducer=(state=initialState, {type, payload}) =>{
    switch (type) {
        case ActionTypes.RECIBIR_TEXTO:
            return {...state, text:[...state.text, payload]};
        
        default:
            return state
    }
}