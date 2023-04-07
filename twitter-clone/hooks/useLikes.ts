import { useEffect, useMemo, useState } from "react"
import { useAppSelector } from "./useRedux"
import { useLoginModal } from "./useLoginModal"
import { checkIsLiked, countLikes, likePost } from "@/httpAPI/likeAPI"

export const useLikes = (postId: number) => {
    const [isLiked, setIsLiked] = useState<boolean>(false)
    const [likeFetching, setLikeFetching] = useState<boolean>(false)
    const [likes, setLikes] = useState<number>(0)
    const isAuth = useAppSelector(state => state.userSlice.isAuth)
    const loginModal = useLoginModal()

    const checkLike = useMemo(async () => {
        if(!isAuth) {
            return
        }
        const response = await checkIsLiked(postId)
        setIsLiked(response)
    }, [likeFetching, postId, isAuth])

    const like = async () => {
        try {
            if(!isAuth) {
                loginModal.openModal()
                return 
            }
            setLikeFetching(true)
            const response = await likePost(postId)
        } catch (error) {
            console.log(error)
        } finally {
            setLikeFetching(false)
        }
    }

    const countAllLikes = useMemo(async () => {
        const response = await countLikes(postId)
        setLikes(response)
    }, [likeFetching, postId])

    return [isLiked, likes, like] as const
}