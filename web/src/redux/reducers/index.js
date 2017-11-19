import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import terminalState from './terminalReducer'

export default combineReducers({
    router: routerReducer,
    terminalState
})
