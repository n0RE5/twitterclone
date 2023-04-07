import React, { useCallback } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

interface ModalProps {
    title: string
    active: boolean
    buttonTitle: string
    close: () => void
    submit: () => void
    body?: React.ReactNode
    footer?: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({title, body, footer, buttonTitle, close, submit, active}) => {

    const closeModal = useCallback(() => {
        close()
    }, [close])

    const submitModal = useCallback(() => {
        submit()
    }, [submit])

    if(!active) {
        return null
    }

    return (
        <div className='flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed inset-0 z-10 bg-neutral-800 bg-opacity-70'>
            <div className='relative w-full lg:w-3/6 my-6 mx-auto lg:max-w-3xl h-full lg:h-auto'>
                <div className='h-full lg:h-auto border-0 rounded-lg shadow-lg flex flex-col relative w-full bg-black'>
                    <div className='flex items-center justify-between p-8 rounded-t'>
                        <span className='text-white text-2xl font-semibold'>{title}</span>
                        <button onClick={closeModal} className='rounded-full flex items-center justify-center relative h-14 w-14 hover:bg-slate-800 hover:bg-opacity-10'>
                            <AiOutlineClose size={20} color='white' />
                        </button>
                    </div>
                    <div className='realtive p-8 flex-auto'>
                        {body}
                    </div>
                    <div className='flex flex-col gap-2 p-8'>
                        <button onClick={submitModal} className='w-full bg-white rounded-full py-2 text-2xl font-semibold hover:bg-slate-200 transition cursor-pointer'>
                            {buttonTitle}
                        </button>
                        {footer}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;