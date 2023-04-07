import React from 'react';

interface InputProps {
    placeholder: string
    value?: any
    type: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<InputProps> = ({placeholder, value, type, onChange}) => {
    return (
        <input placeholder={placeholder} value={value} type={type} onChange={onChange} className='w-full p-4 text-lg bg-black border-2 border-neutral-800 rounded-md outline-none text-white focus:border-2 focus:border-sky-500 transition'/>
    );
};

export default Input;