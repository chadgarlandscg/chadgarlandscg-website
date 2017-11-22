import axios from 'axios'
import { push } from 'react-router-redux'

export const GENERIC_ERROR = 'GENERIC ERROR'
export const UPDATE_TERMINAL = 'UPDATE TERMINAL'
export const RESET_TERMINAL = 'RESET TERMINAL'
export const CHANGE_TERMINAL_INPUT = 'CHANGE TERMINAL INPUT'
export const CHANGE_TERMINAL_STORY = 'CHANGE TERMINAL STORY'

export const genericError = (error) => ({type: GENERIC_ERROR, error})

export const updateTerminal = () => {
  return (dispatch, getState) => {
    const {textIndex, text} = getState().terminalState
    if (textIndex < text.length-1)
      dispatch({type: UPDATE_TERMINAL, textIndex: textIndex+1})
  }
}

export const changeTerminalStory = (text) => {
  return ({type: CHANGE_TERMINAL_STORY, text, textIndex: 0})
}

export const resetTerminal = () => ({type: RESET_TERMINAL})

export const submitTerminalInput = () => {
  return (dispatch, getState) => {
    switch(getState().terminalState.terminalInputText){
      case 'test': {
        dispatch(changeTerminalStory(['test!']))
        dispatch(changeTerminalInput())
        break;
      }
      case '42': {
        dispatch(changeTerminalStory(['You win!']))
        dispatch(changeTerminalInput())
        break;
      }
    }
  }
}

export const changeTerminalInput = (text) => ({type: CHANGE_TERMINAL_INPUT, text: text || ''})
