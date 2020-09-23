
import {ADD, DEC} from './action-type'

export function counter (state = 0, action) {
    switch (action.type) {
        case ADD:
            return state + action.data
        case DEC:
            return state - action.data
        default:
            return state
    }
}