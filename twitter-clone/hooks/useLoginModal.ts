import { switchLoginState } from "@/store/reducers/modalSlice"
import { useAppDispatch, useAppSelector } from "./useRedux"

export const useLoginModal = () => {
    const dispatch = useAppDispatch()

    const active = useAppSelector(state => state.modalSlice.loginModalActive)
    const closeModal = () => dispatch(switchLoginState(false))
    const openModal = () => dispatch(switchLoginState(true))

    return {active, closeModal, openModal} as const
}