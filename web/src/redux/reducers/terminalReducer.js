import { terminalState } from '../store/templates/terminalState'

import {
    UPDATE_TERMINAL, GENERIC_ERROR, RESET_TERMINAL,
    CHANGE_TERMINAL_INPUT, CHANGE_TERMINAL_STORY
} from '../actions/index'

export default (state = terminalState, action) => {
    switch (action.type) {
        case GENERIC_ERROR: {
            return {
                ...state,
                error: action.error,
                awaitingResponse: false,
            }
        }
        case UPDATE_TERMINAL: {
          return {
            ...state,
            textIndex: action.textIndex,
            shouldRenderTerminal: false,
          }
        }
        case RESET_TERMINAL: {
          return {
            ...state,
            shouldRenderTerminal: true,
          }
        }
        case CHANGE_TERMINAL_INPUT: {
          return {
            ...state,
            terminalInputText: action.text,
          }
        }
        case CHANGE_TERMINAL_STORY: {
          return {
            ...state,
            text: action.text,
            textIndex: action.textIndex,
            shouldRenderTerminal: false,
          }
        }
        default: {
            return state
        }
    }
}
