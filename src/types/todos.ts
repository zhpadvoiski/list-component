export enum TodoActionsTypes {
    FETCH_TODOS = "FETCH_TODOS",
    FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS",
    FETCH_TODOS_FAILED = "FETCH_TODOS_FAILED",
}

interface FetchTodosAction {
    type: TodoActionsTypes.FETCH_TODOS;
}

interface FetchTodosSuccessAction {
    type: TodoActionsTypes.FETCH_TODOS_SUCCESS;
    payload: ITodo[];
}

interface FetchTodosFailedAction {
    type: TodoActionsTypes.FETCH_TODOS_FAILED;
    payload: string;
}

export type ITodoAction =
    | FetchTodosAction
    | FetchTodosSuccessAction
    | FetchTodosFailedAction;

export interface ITodo {
    userId: number;
    id: number;
    titile: string;
    completed: boolean;
}

export interface ITodoState {
    todos: any[];
    loading: boolean;
    error: null | string;
}
