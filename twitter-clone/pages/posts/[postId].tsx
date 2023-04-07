import Header from "@/components/Header";
import CommentItem from "@/components/posts/CommentItem";
import PostItem from "@/components/posts/PostItem";
import { getComments } from "@/httpAPI/commentsAPI";
import { getPost } from "@/httpAPI/postsAPI";
import { getById } from "@/httpAPI/userAPI";
import { InferGetServerSidePropsType } from "next";

const PostPage = ({ user, post, comments }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return (
        <>
            <Header showArrow title="Tweet" />
            <PostItem user={user} post={post} />
            {comments.map(comment =>
              <CommentItem comment={comment}/>
            )}  
        </>
    );
};

export async function getServerSideProps(context: any) {
    const postId = context.params.postId
    const post = await getPost(postId)
    const user = await getById(post.userId)
    const comments = await getComments(postId)
    return {
      props: {
        user,
        post,
        comments
      }, 
    }
}

export default PostPage;