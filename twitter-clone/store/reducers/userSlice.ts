import { ILoginUser } from "@/types/Interfaces";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface userState {
    user: ILoginUser
    isAuth: boolean
    isLoading: boolean
    error: string
}

const defaultUser = {
    id: 0,
    username: "",
    email: "",
    roles: "USER",
    profileImg: ""
}

const initialState = {
    user: defaultUser,
    isAuth: false,
    isLoading: false,
    error: ''
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        fetchUser(state) {
            state.isLoading = true
        },
        fetchUserSuccess(state, action: PayloadAction<ILoginUser>) {
            state.isAuth = true
            state.isLoading = false
            state.error = ''
            state.user = action.payload
        },
        fetchUserError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        },
        userLogout(state) {
            state.isAuth = false
            state.isLoading = false
            state.user = defaultUser
            state.error = ''
        }
    }
})

export default userSlice.reducer
export const {fetchUser, fetchUserSuccess, fetchUserError, userLogout} = userSlice.actions