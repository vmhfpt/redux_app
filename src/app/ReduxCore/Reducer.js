import { combineReducers } from "@reduxjs/toolkit";
import showReducer from  '../SlidersReducer/showReducer';
import studentReducer from "../SlidersReducer/studentReducer";
import searchReducer from "../SlidersReducer/searchReducer";
import filterReducer from "../SlidersReducer/filterReducer";
const rootReducer = combineReducers({
    getShow : showReducer,
    getListStudent : studentReducer,
    getSearch : searchReducer,
    getSort : filterReducer,
    getRank : filterReducer,
});
export default rootReducer;