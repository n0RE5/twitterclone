import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface userModalState {
    loginModalActive: boolean
    userModalActive: boolean
    tweetModalActive: boolean
    searchModalActive: boolean
}

const initialState: userModalState = {
    loginModalActive: false,
    userModalActive: false,
    tweetModalActive: false,
    searchModalActive: false
}

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        switchLoginState(state, action: PayloadAction<boolean>) {
            state.loginModalActive = action.payload
        },
        switchUserState(state, action: PayloadAction<boolean>) {
            state.userModalActive = action.payload
        },
        switchTweetState(state, action: PayloadAction<boolean>) {
            state.tweetModalActive = action.payload
        },
        switchSearchState(state, action: PayloadAction<boolean>) {
            state.searchModalActive = action.payload
        }
    }
})

export default modalSlice.reducer
export const {switchLoginState, switchUserState, switchTweetState, switchSearchState} = modalSlice.actions