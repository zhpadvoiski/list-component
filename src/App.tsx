import React from "react";
import store from "./store/index";
import { Provider } from "react-redux";

function App() {
    return (
        <Provider store={store}>
            <div className="App"></div>;
        </Provider>
    );
}

export default App;
