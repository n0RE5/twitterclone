import { useSearchModal } from '@/hooks/useSearchModal';
import React, { useCallback } from 'react';
import { FaSearch } from 'react-icons/fa'

const Searchbar = () => {
    const searchModal = useSearchModal()

    return (
        <div onClick={searchModal.openModal} className='relative rounded-full w-14 h-14 flex justify-center items-center hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer'>
            <FaSearch size={28} color='white' />
        </div>
    );
};

export default Searchbar;