import { useAppSelector } from '@/hooks/useRedux';
import { IPost, fetchedUser } from '@/types/Interfaces';
import React from 'react';
import UserPostItem from '../posts/UserPostItem';
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
                ? posts.map((post, index) => <UserPostItem key={index} user={user} post={post} /> )
                : null
            }
        </>
    );
};

export default UserPostlist;