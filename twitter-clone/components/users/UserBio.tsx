import { useFollow } from '@/hooks/useFollow';
import { useAppSelector } from '@/hooks/useRedux';
import { useUserModal } from '@/hooks/useUserModal';
import { countFollowers, countFollowing } from '@/httpAPI/followAPI';
import { fetchedUser } from '@/types/Interfaces';
import React, { useMemo, useState } from 'react';
import { BiCalendar } from 'react-icons/bi';
import { format } from 'date-fns'

interface UserBioProps {
    user: fetchedUser,
    usermeta: {
        followers: number
        following: number
    }
}

const UserBio: React.FC<UserBioProps> = ({user, usermeta}) => {
    const [isFollowing, followFetching, follow] = useFollow(user.id)
    const userModal = useUserModal()

    const createdAt = useMemo(() => {
        if(!user.createdAt) return null
        return format(new Date(user.createdAt), 'MMMM yyyy')
    }, [user])

    const _user = useAppSelector(state => state.userSlice.user)

    return (
        <div className='border-b-[1px] border-neutral-800 pb-4 px-4'>
            <div className='flex justify-end py-4'>
                <button disabled={followFetching} onClick={_user.id === user.id ? userModal.openModal : follow} className={`
                    py-2 
                    px-3 
                    rounded-xl 
                    font-medium
                    ${isFollowing ? "text-white bg-black border-2 border-white" : "bg-white text-black border-2 border-white"} 
                    hover:opacity-70 
                    transition 
                    cursor-pointer 
                `}>
                    {_user.id === user.id ? "Edit" : "Follow"}
                </button>
            </div>
            <div className='mt-8'>
                <div className='flex flex-col'>
                    <span className='text-white text-2xl font-semibold'>
                        {user.username}
                    </span>
                    <span className='text-neutral-500 font-semibold'>
                        @{user.secondname}
                    </span>
                </div>
            </div>
            <div className='flex flex-col mt-4'>
                <div className='flex flex-row items-center gap-2 mt-4 text-neutral-500 font-semibold'>
                    <BiCalendar size={24} />
                    <span>Joined {createdAt}</span>
                </div>
            </div>
            <div className='flex flex-row mt-4 gap-6'>
                <div className='flex items-center gap-1'>
                    <span className='text-white font-semibold'>{usermeta.following}</span>
                    <span className='text-neutral-500 font-semibold'>Following</span>
                </div>
                <div className='flex items-center gap-1'>
                    <span className='text-white font-semibold'>{usermeta.followers}</span>
                    <span className='text-neutral-500 font-semibold'>Followers</span>
                </div>
            </div>
        </div>
    );
};

export default UserBio;