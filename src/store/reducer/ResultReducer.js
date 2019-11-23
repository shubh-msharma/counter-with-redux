import uuid from 'uuid'

const initState = {
    results: []
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case "SAVE":
            return {
                ...state,
                results:state.results.concat({id:uuid(),value:action.counterValue})
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