import {TodoAction, TodoActionTypes, TodoState} from "../action/actionTypes/todosAT";

const initialState: TodoState = {
    data: [],
    loading: false,
    error: null,
    limit: 10,
    page: 1
}


export const todoReducer = (state = initialState, action: TodoAction) => {
    switch (action.type) {
        case TodoActionTypes.FETCH_TODO:
            return {
                ...state,
                data: action.payload,
                loading: false
            }
        case TodoActionTypes.FETCH_TODO_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case TodoActionTypes.FETCH_TODO_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        case TodoActionTypes.FETCH_TODO_LIMIT:
            return {
                ...state,
                limit: action.payload
            }
        case TodoActionTypes.FETCH_TODO_PAGE:
            return {
                ...state,
                page: action.payload
            }
        default:
            return state
    }
}