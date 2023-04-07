import { countFollowers, countFollowing } from '@/httpAPI/followAPI';
import { fetchedUser } from '@/types/Interfaces';
import React, { useState } from 'react';
import { BiCalendar } from 'react-icons/bi';

interface UserBioProps {
    user: fetchedUser,
    usermeta: {
        followers: number
        following: number
    }
}

const UserBio: React.FC<UserBioProps> = ({user, usermeta}) => {
    return (
        <div className='border-b-[1px] border-neutral-800 pb-4 px-4'>
            <div className='flex justify-end py-4'>
                <button className='py-2 px-3 rounded-xl font-medium bg-white  hover:opacity-70 transition cursor-pointer'>
                    Follow
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
                    <span>Joined March 24</span>
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