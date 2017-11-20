import axios from 'axios'
import { push } from 'react-router-redux'

export const GENERIC_ERROR = 'GENERIC ERROR'
export const UPDATE_TERMINAL = 'UPDATE TERMINAL'
export const RESET_TERMINAL = 'RESET TERMINAL'
export const CHANGE_TERMINAL_INPUT = 'CHANGE TERMINAL INPUT'

export const genericError = (error) => ({type: GENERIC_ERROR, error})

export const updateTerminal = () => {
  return (dispatch, getState) => {
    const {textIndex, text} = getState().terminalState
    if (textIndex < text.length-1)
      dispatch({type: UPDATE_TERMINAL, textIndex: textIndex+1})
  }
}

export const resetTerminal = () => ({type: RESET_TERMINAL})

export const changeTerminalInput = (text) => ({type: CHANGE_TERMINAL_INPUT, text})
