import React, { useCallback } from 'react';
import Avatar from '../UI/Avatar';
import { AiOutlineMessage, AiOutlineHeart } from 'react-icons/ai'
import { useRouter } from 'next/router';
import { IPost, fetchedUser } from '@/types/Interfaces';
import { useLikes } from '@/hooks/useLikes';

interface PostItemProps {
    user: fetchedUser,
    post: IPost
}

const PostItem: React.FC<PostItemProps> = ({user, post}) => {
    const router = useRouter()
    const [isLiked, likes, like] = useLikes(post.id)

    const gotoUserpage = useCallback((e: React.MouseEvent) => {
        e.stopPropagation()
        router.push(`/users/${user.id}`)
    }, [router])

    const likePost = (e: React.MouseEvent) => {
        e.stopPropagation()
        like()
    }

    return (
        <div onClick={() => router.push(`/posts/${post.id}`)} className='border-b-[1px] border-neutral-800 p-5 cursor-pointer hover:bg-neutral-900 transition'>
            <div className='flex flex-row items-start gap-3'>
                <Avatar src={process.env.SERVER_URL + user.profileImg} />
                <div>
                    <div className='flex flex-row gap-2 items-center'>
                        <span onClick={gotoUserpage} className='text-white font-semibold hover:underline'>{user.username}</span>
                        <span onClick={gotoUserpage} className='text-neutral-500 font-semibold hover:underline hidden md:block'>@{user.secondname}</span>
                    </div>
                    <div className='mt-1 text-white'>
                        {post.content}
                    </div>
                    <div className='mt-3 flex flex-row items-center gap-10'>
                        <div className='flex flex-row items-center gap-2 text-neutral-500 font-semibold cursor-pointer transition hover:text-sky-500'>
                            <AiOutlineMessage size={20} />
                            <span>0</span>
                        </div>
                        <div onClick={likePost} className={`flex flex-row items-center gap-2 ${isLiked ? 'text-sky-500' : 'text-neutral-500'} font-semibold cursor-pointer transition hover:text-sky-500`}>
                            <AiOutlineHeart size={20} />
                            <span>{likes}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostItem;