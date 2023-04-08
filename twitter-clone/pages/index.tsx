import Header from "@/components/Header";
import PostItem from "@/components/posts/PostItem";
import { getAllPosts } from "@/httpAPI/postsAPI";
import { InferGetServerSidePropsType } from "next";

export default function Home({posts}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Header title="Home"/>
      {posts.map((post, index) =>
        <PostItem key={index} post={post} />
      )}
    </>
  )
}

export async function getServerSideProps(context: any) {
  const posts = await getAllPosts()
  return {
    props: {
      posts
    }, 
  }
}