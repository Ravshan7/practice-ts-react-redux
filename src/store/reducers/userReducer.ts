import {UserState, ActionType, UserAction} from '../action/actionTypes/userAT'

const initialState: UserState = {
    user: [],
    loading: false,
    error: null
}


export const userReducer = (state = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case ActionType.FETCH_USERS:
            return {
                ...state,
                user: action.payload,
                loading: false
            }
        case ActionType.FETCH_USERS_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case ActionType.FETCH_USERS_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state
    }
}

