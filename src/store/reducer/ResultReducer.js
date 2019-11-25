import uuid from 'uuid'
import * as actionType from '../actions/actionsTypes'

const initState = {
    results: []
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.SAVE:
            return {
                ...state,
                results:state.results.concat({id:uuid(),value:action.counterValue})
            }
        case actionType.DELETE:
            return{
                ...state,
                results:state.results.filter(res=>res.id !== action.id)
            }


        default:
            return state
    }

}


export default reducer