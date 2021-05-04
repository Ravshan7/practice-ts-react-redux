import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {getUsersThunk} from "../store/http/thunk";

const UserLists = () => {
    const {loading, user, error} = useTypedSelector(state => state.user)

    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getUsersThunk())
    }, [])


    if (loading) return <h1>Loader...</h1>
    if (error) return <h1>Ошибка</h1>

    return (
        <div>
            {user.map(el => (
                <li key={el.id}>{el.name}</li>
            ))}


        </div>
    );
};

export default UserLists;
