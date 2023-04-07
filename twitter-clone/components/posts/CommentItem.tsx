import React, { useCallback, useMemo, useState } from 'react';
import Avatar from '../UI/Avatar';
import { IComment, fetchedUser } from '@/types/Interfaces';
import { useRouter } from 'next/router';
import { getById } from '@/httpAPI/userAPI';
import { fetchedUserPlaceholder } from '@/utils/placeholder';

interface CommentItemProps {
    comment: IComment
}

const CommentItem: React.FC<CommentItemProps> = ({comment}) => {
    const router = useRouter()
    const [user, setUser] = useState<fetchedUser>(fetchedUserPlaceholder)

    const fetchUser = useMemo(async () => {
        const response = await getById(comment.userId)
        setUser(response)
    }, [comment])

    const gotoUserpage = useCallback((e: React.MouseEvent) => {
        e.stopPropagation()
        router.push(`/users/${user.id}`)
    }, [router, user])

    return (
        <div onClick={gotoUserpage} className='border-b-[1px] border-neutral-800 p-5 cursor-pointer hover:bg-neutral-900 transition'>
            <div className='flex flex-row items-start gap-3'>
                <Avatar src={process.env.SERVER_URL + user.profileImg} />
                <div>
                    <div className='flex flex-row gap-2 items-center'>
                        <span className='text-white font-semibold hover:underline'>{user.username}</span>
                        <span className='text-neutral-500 font-semibold hover:underline hidden md:block'>@{user.secondname}</span>
                    </div>
                    <div className='mt-1 text-white'>
                        {comment.content}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommentItem;