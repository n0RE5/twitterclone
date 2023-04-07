import { switchTweetState } from "@/store/reducers/modalSlice"
import { useAppDispatch, useAppSelector } from "./useRedux"

export const useTweetModal = () => {
    const dispatch = useAppDispatch()

    const active = useAppSelector(state => state.modalSlice.tweetModalActive)
    const closeModal = () => dispatch(switchTweetState(false))
    const openModal = () => dispatch(switchTweetState(true))

    return {active, closeModal, openModal} as const
}