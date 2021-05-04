import {getTodos, getUsers} from "./api";
import {Dispatch} from "redux";
import {UserAction} from "../action/actionTypes/userAT";
import {fetchUsersAC, fetchUsersErrAC, fetchUsersLoadingAC} from "../action/actionCreator/userAC";
import {TodoAction} from "../action/actionTypes/todosAT";
import {fetchTodoAC, fetchTodoErrorAC, fetchTodoLoadingAC} from "../action/actionCreator/todoAC";

export const getUsersThunk = () => async (dispatch: Dispatch<UserAction>) => {
    try {
        dispatch(fetchUsersLoadingAC(true))
        const {data} = await getUsers()
        dispatch(fetchUsersAC(data))
    } catch (e) {
        dispatch(fetchUsersErrAC(e.message))
    }
}

export const getTodosThunk = (page: number, limit: number) => async (dispatch: Dispatch<TodoAction>) => {
    try {
        dispatch(fetchTodoLoadingAC(true))
        const {data} = await getTodos(page, limit)
        dispatch(fetchTodoAC(data))
    } catch (e) {
        dispatch(fetchTodoErrorAC(e.message))
    }
}