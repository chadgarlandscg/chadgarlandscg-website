import React from 'react'
const DEFAULT_TEXT = 'Welcome to the interactive terminal!'
import Typist from 'react-typist'

export default class Terminal extends React.Component {
  componentDidUpdate(){
    if (!this.props.shouldRenderTerminal) this.props.resetTerminal();
  }
  render() {
    const { text, textIndex, onTypingDone, shouldRenderTerminal, terminalInputText, changeTerminalInput, submitTerminalInput } = this.props
    this.onTypingDone = () => {
      onTypingDone()
      if (textIndex === text.length-1) this.terminalInput.focus();
    }
    const typist = (shouldRenderTerminal &&
      <Typist
        onTypingDone={this.onTypingDone}
        cursor={{
          show: false
        }}
      >
      {text[textIndex]}
      <Typist.Delay ms={500} />
      </Typist>
    )
    return (
      <div id='terminal' className="terminal-style">
        {typist}
        <input
          ref={input => { this.terminalInput = input }}
          className="terminal-style"
          // size={terminalInputText.length || 1}
          value={terminalInputText}
          onChange={element => changeTerminalInput(element.target.value)}
          onKeyPress={event => {
            if (event.key === 'Enter') submitTerminalInput();
          }}
        />
      </div>
    )
  }
    // <p> First Sentence </p>
    // <Typist.Delay ms={500} />
    // <br />
    // This wont be animated until 500ms after the first sentenced is rendered
    // <p>{text || DEFAULT_TEXT}</p>
}
