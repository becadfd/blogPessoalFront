import {Action} from './action'

export interface TokenState {
    token: string
}

const inicialState = {
    token: ''
}

export const tokenReducer = (state: TokenState = inicialState, action: Action) => {
    switch(action.type) {
        case "ADD_TOKEN": {
            return {token: action.payload}
        }
        default: return state
    }
}