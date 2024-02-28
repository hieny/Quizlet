//This file is used for create and initialize configuration of reducers and saga
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import ImportCourseReducer from "./importCourse";
const allReducer = combineReducers({
  ImportCourseReducer,
});
export type RootState = ReturnType<typeof allReducer>;
const store = configureStore({
  reducer: allReducer,
});

export default store;
