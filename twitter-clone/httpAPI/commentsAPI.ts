import { CreateCommentDto } from "@/types/dto"
import { $authHost, $host } from "./hosts"
import { IComment } from "@/types/Interfaces"

export const createComment = async (dto: CreateCommentDto): Promise<IComment> => {
    const response = await $authHost.post('comments', dto)
    return response.data
}

export const getComments = async (postId: number): Promise<IComment[]> => {
    const response = await $host.get(`comments/${postId}`)
    return response.data
}

export const countComments = async (postId: number): Promise<number> => {
    const response = await $host.get(`comments/count/${postId}`)
    return response.data
}