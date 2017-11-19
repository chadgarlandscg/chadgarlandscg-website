import React from 'react'
const DEFAULT_TEXT = 'Welcome to the interactive terminal!'
import Typist from 'react-typist'

export default ({ text, onTypingDone }) =>
  <div id='terminal'>
    <Typist

    >
    <p> First Sentence </p>
    <Typist.Delay ms={500} />
    <br />
    This wont be animated until 500ms after the first sentenced is rendered</Typist>
  </div>

// <p>{text || DEFAULT_TEXT}</p>
