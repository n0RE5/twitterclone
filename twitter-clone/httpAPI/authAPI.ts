import { ILoginUser, IUser, fetchedUser } from "@/types/Interfaces"
import jwt_decode from "jwt-decode"
import { userDTO } from "@/types/dto"
import { $authHost, $host } from "./hosts"

export const registration = async (dto: userDTO): Promise<ILoginUser> => {
    const response = await $host.post('auth/registration', dto)
    localStorage.setItem('token', response.data.token)
    return jwt_decode(response.data.token)
}

export const login = async (dto: userDTO): Promise<ILoginUser> => {
    const response = await $host.post('auth/login', dto)
    localStorage.setItem('token', response.data.token)
    return jwt_decode(response.data.token)
}

export const check = async (): Promise<ILoginUser> => {
    const response = await $authHost.get('auth/check')    
    localStorage.setItem('token', response.data)
    return jwt_decode(response.data)
}

export const changePassword = async(dto: userDTO, newPassword: string) => {
    const response = await $authHost.post('auth/changepassword', {userDto: dto, newPassword})
    return response
}