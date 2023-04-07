import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface loginModalState {
    active: boolean
}

const initialState = {
    active: false
}

const loginModalSlice = createSlice({
    name: "loginModal",
    initialState,
    reducers: {
        switchState(state, action: PayloadAction<boolean>) {
            state.active = action.payload
        }
    }
})

export default loginModalSlice.reducer
export const {switchState} = loginModalSlice.actions