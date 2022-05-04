import { createStore } from "@reduxjs/toolkit";
import rootReducer from "./Reducer";
export const store = createStore(rootReducer);