import {ActionType, UserAction} from "../actionTypes/userAT";

export const fetchUsersAC = (payload: any[]): UserAction => {
    return {
        type: ActionType.FETCH_USERS,
        payload
    }
}

export const fetchUsersLoadingAC = (payload: boolean): UserAction => {
    return {
        type: ActionType.FETCH_USERS_LOADING,
        payload,
    }
}

export const fetchUsersErrAC = (payload: string): UserAction => {
    return {
        type: ActionType.FETCH_USERS_ERROR,
        payload,
    }
}