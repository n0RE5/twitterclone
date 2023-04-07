import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./reducers/userSlice";
import loginModalSlice from "./reducers/loginModalSlice";

const reducer = combineReducers({
    userSlice,
    loginModalSlice
})

export default reducer