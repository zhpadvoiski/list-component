import React from "react";
import store from "./store/index";
import { Provider } from "react-redux";
import UsersList from "./components/UsersList";

function App() {
    return (
        <Provider store={store}>
            <UsersList />
        </Provider>
    );
}

export default App;
