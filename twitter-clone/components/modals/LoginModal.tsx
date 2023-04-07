import { useLoginModal } from '@/hooks/useLoginModal';
import React, { useCallback, useState } from 'react';
import Modal from '@/components/Modal';
import Input from '@/components/UI/Input';
import { useAppDispatch } from '@/hooks/useRedux';
import { fetchUser, fetchUserError, fetchUserSuccess } from '@/store/reducers/userSlice';
import { login, registration } from '@/httpAPI/authAPI';

const LoginModal = () => {
    const loginModal = useLoginModal()
    const dispatch = useAppDispatch()
    const [authType, setAuthType] = useState<boolean>(false)
    const [email, setEmail] = useState<string>('')
    const [secondname, setSecondname] = useState<string>('')
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const onSubmit = async () => {
        try {
            let response;
            dispatch(fetchUser())
            if (authType) {
                response = await registration({email, password, username, secondname})
            } else {
                response = await login({email, password, username, secondname})
            }
            dispatch(fetchUserSuccess(response))
            loginModal.closeModal()
        } catch (error: any) {
            dispatch(fetchUserError(error.response?.data?.message))
            console.log(error);
        }
    }

    const body = (
        <div className='flex flex-col gap-4'>
            {authType &&
                <>
                    <Input placeholder='Secondname' value={secondname} onChange={(e) => setSecondname(e.target.value)} type="text" />
                    <Input placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} type="text" />
                </>
            }
            <Input placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} type="text" />
            <Input placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} type="text" />
        </div>
    )

    const footer = (
        <div className='w-full flex justify-center items-center gap-1 p-4'>
            <div className='text-white text-xl font-semibold'>{authType ? "Already have an account?" : "No account?"}</div>
            <a className='text-xl text-sky-400 hover:underline cursor-pointer' onClick={() => setAuthType((prev) => !prev)}>{authType ? "Login" : "Register"}</a>
        </div>
    )

    return (
        <Modal 
            body={body} 
            footer={footer} 
            active={loginModal.active} 
            title={authType ? 'Registration' : 'Login'} 
            buttonTitle={authType ? 'Register' : 'Login'} 
            close={loginModal.closeModal} 
            submit={onSubmit}
        />
    );
};

export default LoginModal;