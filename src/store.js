import countries from "./reducers/countries";
import thunk from "redux-thunk";
import detail from "./reducers/detail";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, combineReducers, applyMiddleware } from "redux";

const reducer = combineReducers({ countries, detail });

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;