import { CreateFollowDto } from "@/types/dto"
import { $authHost, $host } from "./hosts"

export const followUser = async (dto: CreateFollowDto): Promise<CreateFollowDto> => {
    const response = await $authHost.post('subscriptions/subscribe', dto)
    return response.data
}

export const unfollowUser = async (dto: CreateFollowDto): Promise<CreateFollowDto> => {
    const response = await $authHost.post('subscriptions/unsubscribe', dto)
    return response.data
}

export const checkFollowing = async (dto: CreateFollowDto): Promise<boolean> => {
    const response = await $authHost.post('subscriptions/check', dto)
    return response.data
}

export const countFollowers = async (userId: number): Promise<number> => {
    const response = await $host.get(`subscriptions/followers/${userId}`)
    return response.data
}

export const countFollowing = async (userId: number): Promise<number> => {
    const response = await $host.get(`subscriptions/following/${userId}`)
    return response.data
}