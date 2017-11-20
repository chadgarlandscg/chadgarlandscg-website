import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { updateText } from '../redux/actions/index'
import Terminal from './Terminal'
import { updateTerminal, resetTerminal, changeTerminalInput } from '../redux/actions/index'

const mapStateToProps = (state, ownProps) => {
  return {
    ...state.terminalState
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onTypingDone: () => dispatch(updateTerminal()),
    resetTerminal: () => dispatch(resetTerminal()),
    changeTerminalInput: (text) => dispatch(changeTerminalInput(text)),
  }
}


const ConnectedTerminal = withRouter(connect(mapStateToProps, mapDispatchToProps)(Terminal))
export default ConnectedTerminal
