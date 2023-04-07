import { switchState } from "@/store/reducers/loginModalSlice"
import { useAppDispatch, useAppSelector } from "./useRedux"

export const useLoginModal = () => {
    const dispatch = useAppDispatch()

    const active = useAppSelector(state => state.loginModalSlice.active)
    const closeModal = () => dispatch(switchState(false))
    const openModal = () => dispatch(switchState(true))

    return {active, closeModal, openModal} as const
}