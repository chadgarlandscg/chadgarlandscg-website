import React from 'react'
const DEFAULT_TEXT = 'Welcome to the interactive terminal!'
import Typist from 'react-typist'

export default class Terminal extends React.Component {
  componentDidUpdate(){
    if (!this.props.shouldRenderTerminal) this.props.resetTerminal();
  }
  render() {
    const { text, textIndex, onTypingDone, shouldRenderTerminal, terminalInputText, changeTerminalInput } = this.props
    const typist = (shouldRenderTerminal &&
      <Typist
        onTypingDone={onTypingDone}
      >
      {text[textIndex]}
      </Typist>
    )
    return (
      <div id='terminal' className="terminal-style">
        <input size={terminalInputText.length || 1} className="terminal-style" value={terminalInputText} onChange={(element) => changeTerminalInput(element.target.value)}/>
        {typist}
      </div>
    )
  }
    // <p> First Sentence </p>
    // <Typist.Delay ms={500} />
    // <br />
    // This wont be animated until 500ms after the first sentenced is rendered
    // <p>{text || DEFAULT_TEXT}</p>
}
