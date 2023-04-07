import { CreateFollowDto } from "@/types/dto"
import { $authHost, $host } from "./hosts"
import { getById } from "./userAPI"
import { fetchedUser } from "@/types/Interfaces"

interface user_subs {
    id: number,
    userId: number
    subscriptionId: number
}

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

const getUserArray = async (res: user_subs[]) => {
    const users = []
    for (let element of res) {
        const user = await getById(element.userId)
        users.push(user)
    }
    return users
}

export const getUserFollows = async(): Promise<fetchedUser[]> => {
    const response = await $authHost.get('subscriptions')
    const users = await getUserArray(response.data)
    return users
}