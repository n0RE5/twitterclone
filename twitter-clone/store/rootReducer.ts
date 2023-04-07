import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./reducers/userSlice";
import modalSlice from "./reducers/modalSlice";

const reducer = combineReducers({
    userSlice,
    modalSlice
})

export default reducer