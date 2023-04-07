import { fetchedUser } from "@/types/Interfaces"
import { $authHost, $host } from "./hosts"

export const getById = async (id: number): Promise<fetchedUser> => {
    const response = await $host.get(`/users/${id}`)
    return response.data
}

export const editUserBio = async (dto: any) => {
    const response = await $authHost.post('users/update', dto)
    console.log(response);
    return response.data
}