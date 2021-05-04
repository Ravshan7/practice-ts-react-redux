export interface TodoState {
    data: any[],
    loading: boolean,
    error: null | string,
    limit: number,
    page: number
}

export enum TodoActionTypes {
    FETCH_TODO = 'FETCH_TODO',
    FETCH_TODO_LOADING = 'FETCH_TODO_LOADING',
    FETCH_TODO_ERROR = 'FETCH_TODO_ERROR',
    FETCH_TODO_LIMIT = 'FETCH_TODO_LIMIT',
    FETCH_TODO_PAGE = 'FETCH_TODO_PAGE',
}


interface FetchTodoActionType {
    type: TodoActionTypes.FETCH_TODO
    payload: any[]
}

interface FetchTodoLoadingActionType {
    type: TodoActionTypes.FETCH_TODO_LOADING
    payload: boolean
}

interface FetchTodoErrorActionType {
    type: TodoActionTypes.FETCH_TODO_ERROR
    payload: string
}

interface FetchTodoLimitActionType {
    type: TodoActionTypes.FETCH_TODO_LIMIT
    payload: number
}

interface FetchTodoPageActionType {
    type: TodoActionTypes.FETCH_TODO_PAGE
    payload: number
}

export type TodoAction =
    FetchTodoActionType
    | FetchTodoLoadingActionType
    | FetchTodoErrorActionType
    | FetchTodoLimitActionType
    | FetchTodoPageActionType

