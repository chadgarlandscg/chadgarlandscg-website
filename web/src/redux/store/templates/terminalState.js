const demoText = [
  'Hello, world!',
  'My name is Scott, but I prefer to go by Chad.',
  'I am a full stack developer. yay',
]

const basicText = [
  'Hello, world!',
]

const noText = ['']

const funText = [
  'You awake disoriented.',
  'It\'s too dark to see . . .',
  'What do you do? (test)',
]

const ultimateText = [
  'What is the answer',
  'to the ultimate question',
  '. . .',
  'of life, the universe, and everything?',
]

export const terminalState = {
    text: ultimateText,
    terminalInputText: '',
    shouldRenderTerminal: true,
    textIndex: 0,
    awaitingResponse: false,
    error: null,
}
