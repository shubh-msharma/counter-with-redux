import uuid from 'uuid'

const initState = {
    counter: 0,
    results: []
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
        case "SAVE":
            return {
                ...state,
                results:state.results.concat({id:uuid(),value:state.counter})
            }
        case "DEL_RES":
            return{
                ...state,
                results:state.results.filter(res=>res.id !== action.id)
            }


        default:
            return state
    }

}


export default reducer