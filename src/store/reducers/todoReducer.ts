import { ITodoState, ITodoAction, TodoActionsTypes } from "../../types/todos";

const InitialState: ITodoState = {
    todos: [],
    loading: false,
    error: null,
};

const todoReducer = (state = InitialState, action: ITodoAction): ITodoState => {
    switch (action.type) {
        case TodoActionsTypes.FETCH_TODOS:
            return { ...state, loading: true, error: null };
        case TodoActionsTypes.FETCH_TODOS_SUCCESS:
            return { todos: action.payload, loading: false, error: null };
        case TodoActionsTypes.FETCH_TODOS_FAILED:
            return { todos: [], loading: false, error: action.payload };
        default:
            return state;
    }
};

export default todoReducer;
