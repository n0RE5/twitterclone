import { IPost } from "@/types/Interfaces";
import { $host } from "./hosts";

export const getUserPosts = async(userId: number): Promise<IPost[]> => {
    const posts = await $host.get(`posts/user/${userId}`)
    return posts.data
}

export const getPost = async(postId: number): Promise<IPost> => {
    const post = await $host.get(`posts/${postId}`)
    return post.data
}