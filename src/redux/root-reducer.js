import { combineReducers } from "redux";

import langReducer from "./lang/lang.reducer";

export default combineReducers({
    lang : langReducer,
});
