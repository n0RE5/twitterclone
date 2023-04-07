import { useAppSelector } from '@/hooks/useRedux';
import { IPost, fetchedUser } from '@/types/Interfaces';
import React from 'react';
import PostItem from '../posts/PostItem';
import PostForm from '../posts/PostForm';

interface UserPostlistProps {
    user: fetchedUser
    posts: IPost[]
}

const UserPostlist: React.FC<UserPostlistProps> = ({ user, posts }) => {
    const userState = useAppSelector(state => state.userSlice)

    return (
        <>
            {userState.isAuth && user.id === userState.user.id &&
                <PostForm />
            }
            {posts.length
                ? posts.map((post, index) => <PostItem key={index} user={user} post={post} /> )
                : <span></span>
            }
        </>
    );
};

export default UserPostlist;