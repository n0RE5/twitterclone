import { switchState } from "@/store/reducers/userModalSlice"
import { useAppDispatch, useAppSelector } from "./useRedux"

export const useUserModal = () => {
    const dispatch = useAppDispatch()

    const active = useAppSelector(state => state.userModalSlice.active)
    const closeModal = () => dispatch(switchState(false))
    const openModal = () => dispatch(switchState(true))

    return {active, closeModal, openModal} as const
}