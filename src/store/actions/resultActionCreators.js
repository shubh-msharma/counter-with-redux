import * as actionType from './actionsTypes'


export const Save = (counterValue) => {
    return function(dispatch){
        setTimeout(()=>{dispatch({ type: actionType.SAVE, counterValue: counterValue })},2000)
    }
};
export const Delete = (id) => { return { type: actionType.DELETE, id: id } }
