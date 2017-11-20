import React from 'react'
const DEFAULT_TEXT = 'Welcome to the interactive terminal!'
import Typist from 'react-typist'

export default class Terminal extends React.Component {
  componentDidUpdate(){
    if (!this.props.shouldRenderTerminal) this.props.resetTerminal();
  }
  render() {
    const { text, onTypingDone, shouldRenderTerminal } = this.props
    return (
      <div id='terminal'>
        {shouldRenderTerminal && <Typist
          onTypingDone={onTypingDone}
        >
        {text}
        </Typist>}
      </div>
    )
  }
    // <p> First Sentence </p>
    // <Typist.Delay ms={500} />
    // <br />
    // This wont be animated until 500ms after the first sentenced is rendered
    // <p>{text || DEFAULT_TEXT}</p>
}
