import { appendFileSync } from "fs";
import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
    rootReducer,
    compose(applyMiddleware(thunk), composeWithDevTools())
);
export default store;

export type RootState = ReturnType<typeof rootReducer>;
