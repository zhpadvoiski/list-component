import axios from "axios";
import { TodoActionsTypes, ITodo, ITodoAction } from "../../types/todos";
import { Dispatch } from "redux";

const todosURL = "https://jsonplaceholder.typicode.com/todos";

export const fetchTodos = (page = 1, limit = 10) => {
    return async (dispatch: Dispatch<ITodoAction>) => {
        dispatch({ type: TodoActionsTypes.FETCH_TODOS });
        try {
            const response = await axios.get<ITodo[]>(todosURL, {
                params: { _limit: limit, _page: page },
            });
            dispatch({
                type: TodoActionsTypes.FETCH_TODOS_SUCCESS,
                payload: response.data,
            });
        } catch (e) {
            dispatch({
                type: TodoActionsTypes.FETCH_TODOS_FAILED,
                payload: "Error while fetching todos",
            });
        }
    };
};

export const setTodoPage = (page: number) => {
    return (dispatch: Dispatch<ITodoAction>) => {
        dispatch({
            type: TodoActionsTypes.SET_TODOS_PAGE,
            payload: page,
        });
    };
};
