import { terminalState } from '../store/templates/terminalState'

import {
    UPDATE_TERMINAL, GENERIC_ERROR, RESET_TERMINAL
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
            shouldRenderTerminal: false,
          }
        }
        case RESET_TERMINAL: {
          return {
            ...state,
            shouldRenderTerminal: true,
          }
        }
        default: {
            return state
        }
    }
}
