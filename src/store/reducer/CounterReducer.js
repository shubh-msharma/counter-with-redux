import uuid from 'uuid'
import * as actionType from '../actions'

const initState = {
    counter: 0,
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.INCREAMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
        case actionType.DECREAMENT:
            return {
                ...state,
                counter: state.counter - 1
            }

        case actionType.ADD:
            return {
                ...state,
                counter: state.counter + action.value
            }

        case actionType.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.value
            }
        default:
            return state
    }

}


export default reducer