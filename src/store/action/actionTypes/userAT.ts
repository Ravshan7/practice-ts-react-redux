export interface UserState {
    user: any[];
    loading: boolean;
    error: string | null
}

export enum ActionType {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_LOADING = 'FETCH_USERS_LOADING',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}

export interface FetchUsersAction {
    type: ActionType.FETCH_USERS,
    payload: any[]
}

interface FetchUsersLoaderAction {
    type: ActionType.FETCH_USERS_LOADING,
    payload: boolean
}
interface FetchUsersErrorAction {
    type: ActionType.FETCH_USERS_ERROR,
    payload: string
}

export type UserAction = FetchUsersAction | FetchUsersLoaderAction | FetchUsersErrorAction