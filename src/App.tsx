import React from "react";
import store from "./store/index";
import { Provider } from "react-redux";
import UsersList from "./components/UsersList";
import TodoList from "./components/TodoList";

function App() {
    return (
        <Provider store={store}>
            <UsersList />
            <TodoList />
        </Provider>
    );
}

export default App;
