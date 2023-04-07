export interface userDTO {
    username: string
    secondname: string
    email: string
    password: string
}

export interface CreateFollowDto {
    userId: number
}

export interface CreateCommentDto {
    content: string
    postId: number
}