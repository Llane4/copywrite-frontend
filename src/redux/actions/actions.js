import { ActionTypes } from "../constants/actionsType";

export const setTexto=(texto)=>{
    return{
        type:ActionTypes.RECIBIR_TEXTO,
        payload:texto
    }
}