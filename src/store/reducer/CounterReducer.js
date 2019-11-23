import uuid from 'uuid'

const initState = {
    counter: 0,
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case "INCREAMENT":
            return {
                ...state,
                counter: state.counter + 1
            }
        case "DEACREAMENT":
            return {
                ...state,
                counter: state.counter - 1
            }

        case "ADD":
            return {
                ...state,
                counter: state.counter + action.value
            }

        case "SUBTRACT":
            return {
                ...state,
                counter: state.counter - action.value
            }
        default:
            return state
    }

}


export default reducer