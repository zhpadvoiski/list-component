import React, { FC, useEffect } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

const TodoList: FC = () => {
    const { loading, error, todos, page, limit } = useTypedSelector(
        (state) => state.todo
    );
    const { fetchTodos, setTodoPage } = useActions();
    const pages = [1, 2, 3, 4, 5, 6];

    useEffect(() => {
        fetchTodos(page);
    }, [page]);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (error) {
        return <h1>{error}</h1>;
    }

    return (
        <div>
            {todos.map((todo) => (
                <div key={todo.id}>
                    <input type="checkbox" checked={todo.completed} />
                    {todo.title}
                </div>
            ))}
            <div style={{ display: "flex" }}>
                {pages.map((pageNumber) => (
                    <div
                        style={{
                            border:
                                page === pageNumber
                                    ? "1px solid green"
                                    : undefined,
                            padding: "5px",
                        }}
                        key={pageNumber}
                        onClick={() => setTodoPage(pageNumber)}
                    >
                        {pageNumber}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TodoList;
