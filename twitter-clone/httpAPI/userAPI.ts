import { fetchedUser } from "@/types/Interfaces"
import { $host } from "./hosts"

export const getById = async (id: number): Promise<fetchedUser> => {
    const response = await $host.get(`/users/${id}`)
    return response.data
}