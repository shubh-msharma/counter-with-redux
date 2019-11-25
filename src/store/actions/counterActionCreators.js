import * as actionType from './actionsTypes'

export const Increament = () => { return { type: actionType.INCREAMENT } }
export const Decreament = () => { return { type: actionType.DECREAMENT } }
export const Subtract = (value) => { return { type: actionType.SUBTRACT, value: value } };
export const Add = (value) => { return { type: actionType.ADD, value: value } };
