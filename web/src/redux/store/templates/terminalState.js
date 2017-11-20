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
  'There\'s a loud hum coming from every direction, but it\'s too dark to see . . .',
  'What do you do?'
]

export const terminalState = {
    text: funText,
    terminalInputText: '',
    shouldRenderTerminal: true,
    textIndex: 0,
    awaitingResponse: false,
    error: null,
}
