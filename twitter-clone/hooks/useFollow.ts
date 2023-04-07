import { useMemo, useState } from "react"
import { useAppSelector } from "./useRedux"
import { checkFollowing, followUser, unfollowUser } from "@/httpAPI/followAPI"
import { useLoginModal } from "./useLoginModal"

export const useFollow = (userId: number) => {
    const [isFollowing, setIsFollowing] = useState<boolean>(false)
    const [followFetching, setFollowFetching] = useState<boolean>(false)

    const loginModal = useLoginModal()
    const isAuth = useAppSelector(state => state.userSlice.isAuth)

    const checkSubscribe = useMemo(async () => {
        if(!isAuth) {
            return
        }
        const response = await checkFollowing({userId})
        setIsFollowing(response)
    }, [followFetching, userId, isAuth])

    const switchFollow = async () => {
        try {
            if(!isAuth) {
                loginModal.openModal()
                return
            }
            setFollowFetching(true)
            if (isFollowing) {
                const response = await unfollowUser({userId})
            } else {
                const response = await followUser({userId})
            }
        } catch (error) {
            console.log(error);
        } finally {
            setFollowFetching(false)
        }
    }

    return [isFollowing, followFetching, switchFollow] as const
}