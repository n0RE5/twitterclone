import React from 'react';
import Header from '@/components/Header';
import Image from 'next/image'
import Avatar from '@/components/UI/Avatar';
import { fetchedUser } from '@/types/Interfaces';

interface UserHeaderProps {
    user: fetchedUser
}

const UserHeader: React.FC<UserHeaderProps> = ({ user }) => {
    return (
        <div className="relative">
            <Header showArrow title={user.username} />
            <div className="bg-neutral-700 h-44 relative">
                <Image src={process.env.SERVER_URL + user.profileImg} fill alt="" style={{objectFit: 'cover'}} />
            </div>
            <div className="absolute -bottom-16 left-4">
                <Avatar border large src={process.env.SERVER_URL + user.profileImg}/>
            </div>
        </div>
    );
};

export default UserHeader;