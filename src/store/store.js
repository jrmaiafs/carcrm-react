import { createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let middleware = [ReduxThunk];

const enhancer = composeEnhancers(applyMiddleware(...middleware));

export const store = createStore(rootReducer, enhancer);
