import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./reducers/userSlice";
import loginModalSlice from "./reducers/loginModalSlice";
import userModalSlice from "./reducers/userModalSlice";

const reducer = combineReducers({
    userSlice,
    loginModalSlice,
    userModalSlice
})

export default reducer