import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, combineReducers, applyMiddleware ,compose} from "redux";
import { Provider } from "react-redux";

import CounterReducer from "./store/reducer/CounterReducer";
import ResultReducer from "./store/reducer/ResultReducer";

const rootReducer = combineReducers({
    ctrReducer: CounterReducer,
    resReducer: ResultReducer
});

function logger(store) {
    return function (next) {
        return function (action) {
            console.log(next)
            console.log(action);
             next(action) 
            // console.log(result)
            // return result;
        };
    };
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger)));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
registerServiceWorker();
