import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { updateText } from '../redux/actions/index'
import Terminal from './Terminal'
import { updateTerminal } from '../redux/actions/index'

const mapStateToProps = (state, ownProps) => {
  return {
    text: state.terminalState.text
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onTypingDone: () => dispatch(updateTerminal())
  }
}


const ConnectedTerminal = withRouter(connect(mapStateToProps, mapDispatchToProps)(Terminal))
export default ConnectedTerminal
