import { terminalState } from '../store/templates/terminalState'

import {
    UPDATE_TERMINAL, GENERIC_ERROR
} from '../actions/index'

export default (state = terminalState, action) => {
    switch (action.type) {
        case GENERIC_ERROR: {
            return {
                ...state,
                error: action.error,
                awaitingResponse: false
            }
        }
        case UPDATE_TERMINAL: {
          return {
            ...state,
            text: action.text,
            more: false,
          }
        }
        default: {
            return state
        }
    }
}
