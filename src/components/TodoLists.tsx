import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {getTodosThunk} from "../store/http/thunk";
import {fetchTodoPageAC} from "../store/action/actionCreator/todoAC";

const TodoLists: React.FC = () => {
    const {loading, data, error, limit, page} = useTypedSelector(state => state.todo)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTodosThunk(page, limit))
    }, [page])


    const arr: number[] = [1, 2, 3, 4, 5]

    const handlerClick = (el: number): void => {
        dispatch(fetchTodoPageAC(el))
    }


    if (loading) return <h1>Loading...</h1>
    if(error) return <h1>{error}</h1>

    return (
        <div>
            {data.map(el => <li key={el.id}>{el.id} - {el.title}</li>)}
            <div>
                {arr.map(el => <span onClick={() => handlerClick(el)} style={el === page ? {color: 'red', fontWeight: "bold"} : {}} key={el}>{el}</span>)}
            </div>
        </div>


    );
};

export default TodoLists;
