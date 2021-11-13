export enum TodoActionsTypes {
    FETCH_TODOS = "FETCH_TODOS",
    FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS",
    FETCH_TODOS_FAILED = "FETCH_TODOS_FAILED",
    SET_TODOS_PAGE = "SET_TODOS_PAGE",
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

interface SetTodoPage {
    type: TodoActionsTypes.SET_TODOS_PAGE;
    payload: number;
}

export type ITodoAction =
    | FetchTodosAction
    | FetchTodosSuccessAction
    | FetchTodosFailedAction
    | SetTodoPage;

export interface ITodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export interface ITodoState {
    todos: ITodo[];
    loading: boolean;
    error: null | string;
    page: number | undefined;
    limit: number | undefined;
}
