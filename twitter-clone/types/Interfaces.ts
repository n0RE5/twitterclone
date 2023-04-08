export interface fetchedUser {
    id: number
    username: string
    secondname: string
    profileImg: string
    bannerImg: string
    createdAt: string
}

export interface IUser {
    id: number,
    username: string,
    profileImg: string
    bannerImg: string
}

export interface ILoginUser {
    id: number,
    username: string,
    email: string,
    roles: string,
    profileImg: string
}

export interface IPost {
    id: number,
    content: string,
    userId: number,
    updatedAt: string
    createdAt: string
}

export interface IComment {
    id: number
    content: string
    userId: number
    postId: number
}