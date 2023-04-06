import Header from "@/components/Header";
import PostItem from "@/components/posts/PostItem";
import { getPost } from "@/httpAPI/postsAPI";
import { getById } from "@/httpAPI/userAPI";
import { InferGetServerSidePropsType } from "next";

const PostPage = ({ user, post }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return (
        <>
            <Header showArrow title="Tweet" />
            <PostItem user={user} post={post} />  
        </>
    );
};

export async function getServerSideProps(context: any) {
    const postId = context.params.postId
    const post = await getPost(postId)
    const user = await getById(post.userId)
    return {
      props: {
        user,
        post
      }, 
    }
}

export default PostPage;