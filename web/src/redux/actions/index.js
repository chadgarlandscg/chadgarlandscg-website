import axios from 'axios'
import { push } from 'react-router-redux'

export const GENERIC_ERROR = 'GENERIC ERROR'
export const UPDATE_TERMINAL = 'UPDATE TERMINAL'

export const genericError = (error) => ({type: GENERIC_ERROR, error})

export const updateTerminal = () => {
  return (dispatch, getState) => {
    if (getState().terminalState.more)
      dispatch({type: UPDATE_TERMINAL, text: 'JUST GOTTA TEST IT!!!'})
  }
}
