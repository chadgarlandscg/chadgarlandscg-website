import { appState } from '../store/templates/appState'

import {
    SOME_ACTION, GENERIC_ERROR
} from '../actions/index'

export default (state = appState, action) => {
    switch (action.type) {
        case SOME_ACTION: {
            return {
                ...state,
                sample: action.payload
            }
        }
        case GENERIC_ERROR: {
            return {
                ...state,
                error: action.error,
                awaitingResponse: false
            }
        }
        default: {
            return state
        }
    }
}
