import Header from "@/components/Header";
import { useRouter } from "next/router";
import Avatar from "@/components/UI/Avatar";
import UserHeader from "@/components/users/UserHeader";
import UserBio from "@/components/users/UserBio";
import PostItem from "@/components/posts/PostItem";
import { getById } from "@/httpAPI/userAPI";
import { InferGetServerSidePropsType } from "next";
import { getUserPosts } from "@/httpAPI/postsAPI";
import { useEffect } from "react";
import { countFollowers, countFollowing } from "@/httpAPI/followAPI";


const UserPage = ({ user, usermeta, posts }: InferGetServerSidePropsType<typeof getServerSideProps> ) => {
    const router = useRouter()

    useEffect(() => {
        if(!user) {
            router.push('/')
        }
    }, [])
    
    return (
        <>
            <UserHeader user={user} />
            <UserBio usermeta={usermeta} user={user} />
            {posts.length
                ? posts.map((post, index) => <PostItem key={index} user={user} post={post} /> )
                : <span></span>
            }
        </>
    );
};

export async function getServerSideProps(context: any) {
    const userId = context.params.userId
    const user = await getById(userId)
    const posts = await getUserPosts(userId)
    const followers = await countFollowers(userId)
    const following = await countFollowing(userId)
    const usermeta = {following, followers}
    return {
      props: {
        user,
        usermeta,
        posts
      }, 
    }
}

export default UserPage;