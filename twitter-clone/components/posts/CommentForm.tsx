import React, { useState } from 'react';
import Avatar from '../UI/Avatar';
import { useAppSelector } from '@/hooks/useRedux';
import { createPost } from '@/httpAPI/postsAPI';
import { useRouter } from 'next/router';
import { useLoginModal } from '@/hooks/useLoginModal';
import { createComment } from '@/httpAPI/commentsAPI';

const CommentForm: React.FC = () => {
    const router = useRouter()
    const loginModal = useLoginModal()

    const postId = router.query.postId
    const user = useAppSelector(state => state.userSlice.user)
    const isAuth = useAppSelector(state => state.userSlice.isAuth)
    const [content, setContent] = useState<string>('')

    const makeComment = async (e: React.MouseEvent) => {
        try {
            e.preventDefault()
            if(!isAuth) {
                loginModal.openModal()
                return
            }
            const response = await createComment({content, postId: Number(postId)})
            router.push(router.asPath)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='border-b-[1px] border-neutral-800 p-5'>
            <div className='flex flex-row items-start gap-3'>
                <div>
                    <Avatar src={process.env.SERVER_URL + user.profileImg} />
                </div>
                <div className='flex-auto'>
                    <form className='flex flex-col gap-2 items-center justify-center mt-3'>
                        <input
                            required
                            autoFocus
                            type="text" 
                            value={content} 
                            onChange={(e) => setContent(e.target.value)}
                            className='bg-transparent text-white text-xl w-full font-semibold outline-none'
                        />
                        <div className='flex mt-3 flex-row border-b-[1px] w-full border-white' />
                        <div className='flex justify-end w-full flex-row mt-3'>
                            <button onClick={makeComment} className='bg-sky-500 rounded-full py-2 px-4 text-white text-xl font-semibold hover:bg-sky-700 cursor-pointer transition'>Comment</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CommentForm;