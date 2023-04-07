import { switchSearchState } from "@/store/reducers/modalSlice"
import { useAppDispatch, useAppSelector } from "./useRedux"

export const useSearchModal = () => {
    const dispatch = useAppDispatch()

    const active = useAppSelector(state => state.modalSlice.searchModalActive)
    const closeModal = () => dispatch(switchSearchState(false))
    const openModal = () => dispatch(switchSearchState(true))

    return {active, closeModal, openModal} as const
}