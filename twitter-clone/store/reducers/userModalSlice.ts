import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface userModalState {
    active: boolean
}

const initialState = {
    active: false
}

const userModalSlice = createSlice({
    name: "userModal",
    initialState,
    reducers: {
        switchState(state, action: PayloadAction<boolean>) {
            state.active = action.payload
        }
    }
})

export default userModalSlice.reducer
export const {switchState} = userModalSlice.actions