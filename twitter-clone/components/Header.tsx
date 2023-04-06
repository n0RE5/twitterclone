import { useRouter } from 'next/router';
import React, { useCallback } from 'react';
import { BiArrowBack } from 'react-icons/bi'
import Searchbar from './Searchbar';

interface HeaderProps {
    title?: string
    showArrow?: boolean
}

const Header: React.FC<HeaderProps> = ({title, showArrow}) => {
    const router = useRouter()

    const goBack = useCallback(() => {
        router.back()
    }, [router])

    return (
        <div className='border-b-[1px] border-neutral-800 p-4'>
            <div className='flex flex-row justify-between'>
                <div className='flex flex-row items-center gap-2'>
                    {showArrow &&
                        <div onClick={goBack} className='rounded-full flex items-center justify-center w-14 h-14 hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer'>
                            <BiArrowBack size={28} color='white'  />
                        </div>
                    }
                    <div className='text-white text-2xl font-medium'>
                        {title}
                    </div>
                </div>
                <Searchbar />
            </div>
        </div>
    );
};

export default Header;