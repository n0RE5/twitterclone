import { switchUserState } from "@/store/reducers/modalSlice"
import { useAppDispatch, useAppSelector } from "./useRedux"

export const useUserModal = () => {
    const dispatch = useAppDispatch()

    const active = useAppSelector(state => state.modalSlice.userModalActive)
    const closeModal = () => dispatch(switchUserState(false))
    const openModal = () => dispatch(switchUserState(true))

    return {active, closeModal, openModal} as const
}