import {TodoAction, TodoActionTypes} from "../actionTypes/todosAT";

export const fetchTodoAC = (payload: any[]): TodoAction => {
    return {
        type: TodoActionTypes.FETCH_TODO,
        payload
    }
}

export const fetchTodoLoadingAC = (payload: boolean): TodoAction => {
    return {
        type: TodoActionTypes.FETCH_TODO_LOADING,
        payload
    }
}

export const fetchTodoErrorAC = (payload: string): TodoAction => {
    return {
        type: TodoActionTypes.FETCH_TODO_ERROR,
        payload
    }
}

export const fetchTodoPageAC = (payload: number): TodoAction => {
    return {
        type: TodoActionTypes.FETCH_TODO_PAGE,
        payload
    }
}

export const fetchTodoLimitAC = (payload: number): TodoAction => {
    return {
        type: TodoActionTypes.FETCH_TODO_LIMIT,
        payload
    }
}