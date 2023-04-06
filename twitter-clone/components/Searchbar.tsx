import React from 'react';
import { FaSearch } from 'react-icons/fa'

interface SearchbarProps {
    
}

const Searchbar: React.FC<SearchbarProps> = () => {
    return (
        <div className='relative rounded-full w-14 h-14 flex justify-center items-center hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer'>
            <FaSearch size={28} color='white' />
        </div>
    );
};

export default Searchbar;