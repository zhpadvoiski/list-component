import { ITodoState, ITodoAction, TodoActionsTypes } from "../../types/todos";

const InitialState: ITodoState = {
    todos: [],
    loading: false,
    error: null,
    page: 1,
    limit: undefined,
};

const todoReducer = (state = InitialState, action: ITodoAction): ITodoState => {
    switch (action.type) {
        case TodoActionsTypes.FETCH_TODOS:
            return { ...state, loading: true, error: null };
        case TodoActionsTypes.FETCH_TODOS_SUCCESS:
            return {
                ...state,
                todos: action.payload,
                loading: false,
                error: null,
            };
        case TodoActionsTypes.FETCH_TODOS_FAILED:
            return {
                ...state,
                todos: [],
                loading: false,
                error: action.payload,
            };
        case TodoActionsTypes.SET_TODOS_PAGE:
            return {
                ...state,
                page: action.payload,
            };
        default:
            return state;
    }
};

export default todoReducer;
