import axios from 'axios'
import { push } from 'react-router-redux'

export const SOME_ACTION = 'SOME ACTION'
export const GENERIC_ERROR = 'GENERIC ERROR'

export const someAction = (payload) => ({type: SOME_ACTION, payload})

export const genericError = (error) => ({type: GENERIC_ERROR, error})
