import { $authHost, $host } from "./hosts"

interface likeCreation {
    id: number
    postId: number
    userId: number
}

export const likePost = async (postId: number): Promise<likeCreation> => {
    const response = await $authHost.post('likes', {postId})
    return response.data
}

export const checkIsLiked = async (postId: number): Promise<boolean> => {
    const response = await $authHost.post('likes/check', {postId})
    return response.data
}

export const countLikes = async (postId: number): Promise<number> => {
    const response = await $host.get(`likes/${postId}`)
    return response.data
}